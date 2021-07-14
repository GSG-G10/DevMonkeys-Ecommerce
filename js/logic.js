const products = [
    {category: 'T-shirt', price: 5},
    {category: 'pijames', price: 10},
    {category: 'shoes', price: 50},
    {category: 'T-shirt', price: 95},
    {category: 'bags', price: 100},
    {category: 'pants', price: 1000}
  
];

function filterByCategory(name) {
    return products.filter( function (item) { return item.category === name });
}
filterByCategory();

function FilterByPrice(price) {
    return products.filter( function (item) { return item.price <= price });
}
console.log(FilterByPrice(30));


module.exports ={ filterByCategory,FilterByPrice}