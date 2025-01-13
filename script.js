const productsContainer = document.getElementById("products-container");

console.log(recipies)

let products = [];

//get ingredients from all recipies
let productsFromRecipies = recipies.map(recipie => recipie.recipeIngredients.map(element => element.ingredient));

// find unique ingredients 
let productsObj = new Set(productsFromRecipies.flat());
products = [...productsObj];


const displayProducts = () => {
    const productBtn = products.map(product => {
        console.log(product);
        return `<button id="${product}" class="product"> ${product} </button>`
    }).join("");
    productsContainer.innerHTML = productBtn;
}

console.log("Products from the recipe", products);

displayProducts();

let productBtns = document.querySelectorAll("button");

productBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log(btn);
    });
});