const productsList = [
  {
    id: "p1",
    name: "T-shirt",
    imageUrl: "https://via.placeholder.com/150/255595/808080",
    details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: 25,
    category: "cat_1",
  },
  {
    id: "p2",
    name: "Shouse",
    imageUrl: "https://via.placeholder.com/150/255595/808080",
    details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: 15,
    category: "cat_2",
  },
  {
    id: "p3",
    name: "Toy",
    imageUrl: "https://via.placeholder.com/150/255595/808080",
    details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: 5,
    category: "cat_3",
  },
];

function storeData() {
  if (!localStorage.getItem("cart"))
    localStorage.setItem("cart", JSON.stringify([]));
}
function addCard(item) {
  const dataArray = JSON.parse(localStorage.getItem("cart"));
  dataArray.push(item);
  localStorage.setItem("cart", JSON.stringify(dataArray));
}
function getItem() {
  return JSON.parse(localStorage.getItem("cart"));
}

// if (typeof module !== "undefined") {
//   module.exports = {
//     products,
//     getItem,
//     addCard,
//     storeData,
//   };
// }
