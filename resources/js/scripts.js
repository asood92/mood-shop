import data from "./data.js";
const itemsContainer = document.getElementById("items");
const itemList = document.getElementById("item-list");
itemList.innerHTML = "<li> Hello World</li>";
const cartQty = document.getElementById("cart-qty");
const cartTotal = document.getElementById("cart-total");

// the length of our data determines how many times this loop goes around
data.forEach(function (element, index) {
    // create a new div element and give it a class name
    let newDiv = document.createElement("div");
    newDiv.className = "item";

    // create an image element
    let img = document.createElement("img");
    // this will change each time we go through the loop. Can you explain why?
    img.src = data[index].image;
    img.width = 300;
    img.height = 300;
    // Addd the image to the div
    newDiv.appendChild(img);

    // create paragraph element
    let desc = document.createElement("p");
    // give the paragraph text from data
    desc.innerText = data[index].desc;
    // append the paragraph to the div
    newDiv.appendChild(desc);
    // repeated but for price
    let price = document.createElement("P");
    price.innerText = data[index].price;
    newDiv.appendChild(price);

    // create button element
    let button = document.createElement("button");
    button.id = data[index].name;

    // create custom data attribute for price
    // holds the price for each element in the button
    button.dataset.price = data[index].price;
    button.innerHTML = "Add to Cart";
    newDiv.appendChild(button);
    // put new div inside items container
    itemsContainer.appendChild(newDiv);
});

// create array for all items
const cart = [];

// function to add all items to a
function addItem(name, price) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            cart[i].qty += 1;
            return;
        }
    }
    const item = { name: name, price: price, qty: 1 };
    cart.push(item);
}

// show items
function showItems() {
    const qty = getQty();
    console.log(`You have ${qty} items in your cart`);
    cartQty.innerHTML = `You have ${qty} items in your cart`;
    let itemStr = "";
    // iterate through cart until all items have been printed
    for (let i = 0; i < cart.length; i += 1) {
        // console.log(`${cart[i].name} $${cart[i].price} x ${cart[i].qty} `);
        const { name, price, qty } = cart[i];

        itemStr += `<li>${name} $${price} x ${qty} = $${qty * price}</li>`;
    }
    itemList.innerHTML = itemStr;
    cartTotal.innerHTML = `Total in cart: $${getTotal()}`;
}

// get quantity
function getQty() {
    let qty = 0;
    for (let i = 0; i < cart.length; i += 1) {
        qty += cart[i].qty;
    }
    return qty;
}

// get total
function getTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].qty;
    }
    return total.toFixed(2);
}

function removeItem(name, qty = 0) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            if (qty > 0) {
                cart[i].qty -= qty;
            }
            cart[i].qty -= 1;
            if (cart[i].qty < 1 || qty === 0) {
                cart.splice(i, 1);
            }
            return;
        }
    }
}

addItem("Apple", 0.99);
addItem("Orange", 1.29);
addItem("Opinion", 0.02);
addItem("Apple", 0.99);
addItem("Frisbee", 9.92);
addItem("Apple", 0.99);
addItem("Orange", 1.29);

showItems();
removeItem("Apple", 1);
removeItem("Frisbee");
showItems();
