// search function

let search = (arr, nameToBeSearched) => {
  const searchItem = arr.filter((i) => i.name === nameToBeSearched);
  return searchItem;
};

// Add new product to cart

const addItem = (array, item) => [...array, item];

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

module.exports = { addItem, search, editItem };
