import data from "./data.js";
const itemsContainer = document.getElementById("items");

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
