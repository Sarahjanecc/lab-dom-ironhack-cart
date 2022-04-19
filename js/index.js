// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span")
  const valueDOM = +(price.innerHTML)

  const quantityDOM= product.querySelector(".quantity input").valueAsNumber
 
  const subtotal = valueDOM * quantityDOM

  const subTotalDOM= product.querySelector(".subtotal span")
  subTotalDOM.innerHTML=subtotal
console.log (subtotal)
   return subtotal

}

function calculateAll() {
  const totalProductsDOM = document.querySelectorAll(".product");
  let totalPrice = 0
  totalProductsDOM.forEach((product)=>{
    totalPrice += updateSubtotal(product);

  })


  const totalDOM = document.querySelector("#total-value span");
  console.log("Total before updating Value", totalDOM.innerText);
  totalDOM.innerText = totalPrice;
  console.log("Total after updating Value", totalDOM.innerText);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
