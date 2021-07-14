const products = [
  { id: 1, category: 'T-shirt', price: 5 },
  { id: 2, category: 'pijames', price: 10 },
  { id: 3, category: 'shoes', price: 50 },
  { id: 4, category: 'T-shirt', price: 95 },
  { id: 5, category: 'bags', price: 100 },
  { id: 6, category: 'pants', price: 1000 }

];
// filter by category function
function filterByCategory(name) {
  return products.filter(function (item) { return item.category === name });
}
filterByCategory();

// filter by price function

function FilterByPrice(price) {
  return products.filter(function (item) { return item.price <= price });
}

// Delete function
let deleteItem = (products, item) => {
  const filterItem = products.filter((i) => { return i.id !== item.id })
  return filterItem;
};


// search function

let search = (arr, nameToBeSearched) => {
  const searchItem = arr.filter((i) => i.name === nameToBeSearched);
  return searchItem;
};

// Add new product to cart

const addItem = (array, item) => [...array, item];

//sum cart
const sumCart = (cart) =>
  cart.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

// edit items
const editItem = (arr, id, newValues) => {
  const newArr = arr.map((item) => {
    if (item.id === id) {
      return { ...item, ...newValues };
    } else {
      return item;
    }
  });
  return newArr;
};


if (typeof module !== 'undefined') {
  module.exports = {
    addItem, search, editItem, sumCart, FilterByPrice, deleteItem
  }
}
