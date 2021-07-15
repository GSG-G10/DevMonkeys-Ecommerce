const table = document.querySelector("table");
let cartData = getItem();
// console.log(cartData);
let tableHtml = `<tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Price</th>
        </tr>`;
cartData.forEach((element) => {
  tableHtml += `  <tr>
    <td>
        <div class="description-product">
            <div class="conatiner-image">
                <img src=${element.image} alt="product1">
            </div>
            <div class="container-content" id=${element.id}>
                <span>${element.name}</span>
                <span>price : ${element.price}</span>
                <span class="remove">remove</span>
            </div>
        </div>
    </td>
    <td><input type="number" min="0"></td>
    <td>${element.price}</td>
 </tr> `;
});

table.innerHTML = tableHtml;

const addToCartButton = document.querySelectorAll(".remove");
addToCartButton.forEach((el) => {
  console.log(el);
  el.addEventListener("click", (e) => {
    console.log(e.target.parentNode.parentNode.parentNode.parentNode);
    removeItem(parseInt(e.target.parentNode.id));
    const tbody = document.querySelector("tbody");
    tbody.removeChild(e.target.parentNode.parentNode.parentNode.parentNode);
    cartData = getItem();
    getTotalPrice();
  });
});

function getTotalPrice() {
  const totalPrice = document.querySelector(".total-price");
  totalPrice.innerHTML = cartData.reduce(
    (total, current) => parseInt(current.price.substring(1)) + total,
    0
  );
}
getTotalPrice();
