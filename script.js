let products =[];

//Constructor
function Product(paramProduct,paramPrice) {
  this.attrProduct=paramProduct;
  this.attrPrice=paramPrice;
}

let inputProduct = document.getElementById("txtProduct"); //the value is "" at this point
let inputPrice = document.getElementById("txtPrice");

//Register fucntion
function register() {
  let newProduct = new Product(inputProduct.value,inputPrice.value);
  products.push(newProduct);
  display();
  }



//display function
function display () {
  let row="";
  for(let i=0;i<products.length;i++) {
    let product=products[i];
    //+= keeps the previous input. without += previous will be deleted and only show the new data
    row+=`
    <tr>
      <td>${i+1}</td>
      <td>${product.attrProduct}</td>
      <td>${product.attrPrice}</td>
    </tr>`;
  }
  document.getElementById("productsTable").innerHTML=row;
  document.getElementById("productsInCart").innerHTML=products.length;

}

//create an init 
function init() {
  //create initial objects
  let product1 = new Product("T-Shirt", 12.5);
  let product2 = new Product("Fan", 100);
  products.push(product1, product2);
  display();
}

window.onload=init;