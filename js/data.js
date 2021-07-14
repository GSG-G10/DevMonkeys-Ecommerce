function storeData() {
  if (!localStorage.getItem("cart"))
    localStorage.setItem("cart", JSON.stringify([]));
}
function addCard(item) {
  const dataArray = JSON.parse(localStorage.getItem("cart"));
  item.id = dataArray[dataArray.length - 1]?.id + 1 || 0;
  dataArray.push(item);
  localStorage.setItem("cart", JSON.stringify(dataArray));
}
function getItem() {
  return JSON.parse(localStorage.getItem("cart"));
}

// function to remove item
function removeItem(id) {
  const dataArray = JSON.parse(localStorage.getItem('cart'));
  const dataFiltered = dataArray.filter(function (item) {
    return item.id != id;
  });
  localStorage.setItem('cart', JSON.stringify(dataFiltered));
}