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

module.exports = { addItem, search, sumCart };
