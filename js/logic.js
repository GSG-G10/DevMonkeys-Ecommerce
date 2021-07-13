// search function

let search = (arr, nameToBeSearched) => {
  const searchItem = arr.filter((i) => i.name === nameToBeSearched);
  return searchItem;
};

// Add new product to cart

const addItem = (array, item) => [...array, item];

module.exports = { addItem, search };
