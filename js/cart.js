

const table = document.querySelector('table');
const cartData = getItem();
console.log(cartData);
let tableHtml = "";
cartData.forEach(element => {
    tableHtml+= `  <tr>
    <td>
        <div class="description-product">
            <div class="conatiner-image">
                <img src=${element.image} alt="product1">
            </div>
            <div class="container-content">
                <span>${element.name}</span>
                <span>price : ${element.price}</span>
                <span class="remove">remove</span>
            </div>
        </div>
    </td>
    <td><input type="number" min="0"></td>
    <td>20$</td>
 </tr> `
});

table.innerHTML= tableHtml;

