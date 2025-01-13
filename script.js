const productsContainer = document.getElementById("products-container");



let products = [];

class Recipe {
    name;
    type;
    time;
    recipeIngredients = [];

    constructor(name, type, time, recipeIngredients){
        this.name = name;
        this.type = type;
        this.time = time;
        this.recipeIngredients = recipeIngredients;
    }

    getIngredients = () => {
      return this.recipeIngredients.map(element => element.ingredient)
    
    }
}

const pancakes = new Recipe("Buttermilk pancakes", "desserts", "30 mins", [
    {
        ingredient: "buttermilk",
        quantity: "1.3 cups"
    },
    {
        ingredient: "flour",
        quantity: "2 cups"
    },
    {
        ingredient: "eggs",
        quantity: "2"
    },
    {
        ingredient: "sugar",
        quantity: "0.3 cups"
    },
    {
        ingredient: "salt",
        quantity: "1 tsp "
    },

]);

const displayProducts = () => {
    const productBtn =  products.map(product => {
        console.log(product);
        return `<button id="${product}" class="product"> ${product} </button>`
   }).join("");
    productsContainer.innerHTML = productBtn;
}

products = pancakes.getIngredients();

console.log("Products from the recipe",products);

displayProducts();

let productBtns = document.querySelectorAll("button");

productBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log(btn);
    });
  });