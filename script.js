const productsContainer = document.getElementById("products-container");



const products = ["milk", "sugar", "flour", "eggs", "chocolate", "banana", "buttermilk"];

const displayProducts = () => {
    const productBtn =  products.map(product => {
        console.log(product);
        return `<button id="${product}" class="product"> ${product} </button>`
   }).join("");
    productsContainer.innerHTML = productBtn;
}

displayProducts();

let productBtns = document.querySelectorAll("button");
productBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log(btn);
    });
  });
