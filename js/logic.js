const products = [
    {category: 'T-shirt', price: 5},
    {category: 'pijames', price: 10},
    {category: 'shoes', price: 50},
    {category: 'T-shirt', price: 95},
    {category: 'bags', price: 100},
    {category: 'pants', price: 1000}
  
];
// filter by category function
function filterByCategory(name) {
    return products.filter( function (item) { return item.category === name });
}
filterByCategory();

// filter by price function

function FilterByPrice(price) {
    return products.filter( function (item) { return item.price <= price });
}
console.log(FilterByPrice(30));

// search function

let search = (arr, nameToBeSearched) => {
  const searchItem = arr.filter((i) => i.name === nameToBeSearched);
  return searchItem;
};

// Add new product to cart

const addItem = (array, item) => [...array, item];

module.exports = { filterByCategory,FilterByPrice ,addItem, search };
