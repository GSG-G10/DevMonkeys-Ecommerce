const {filterByCategory , FilterByPrice ,search,addItem} = require ("../js/logic.js");
describe("filterByCategory and FilterByPrice Function tests", () => {
    const products = [
        {category: 'T-shirt', price: 5},
        {category: 'pijames', price: 10},
        {category: 'shoes', price: 50},
        {category: 'T-shirt', price: 95},
        {category: 'bags', price: 100},
        {category: 'pants', price: 1000}
      
    ];
    // filter by category function
    test("it should return products have the same input category", () => {
        const actual = filterByCategory("T-shirt");
        const expected = [
            { category: 'T-shirt', price: 5 },
            { category: 'T-shirt', price: 95 }
        ];
        expect(actual).toEqual(expected);
    });
    // filter by price function
    test("it should return item filter by price", () => {
      

        const actual = FilterByPrice(10);
        const expected = [
            {category: 'T-shirt', price: 5},
            {category: 'pijames', price: 10}
        ];
        expect(actual).toEqual(expected);
    });
});

// search for products
describe("Testing search return value", () => {
  test("Search", () => {
    const arr = [
      { id: 0, name: "t-shirt", price: 20 },
      { id: 1, name: "top", price: 30 },
      { id: 2, name: "pants", price: 40 },
    ];
    const nameToBeSearched = "top";
    const actual = search(arr, nameToBeSearched);
    const expected = [{ id: 1, name: "top", price: 30 }];
    expect(actual).toEqual(expected);
  });
});

// Add Product to Cart
describe("Testing product items", () => {
  test("Should return array with new item when given an array", () => {
    const array = [{ id: "1" }, { id: "2" }];
    const item = { id: "3" };
    const actual = addItem(array, item);
    const expected = [...array, item];
    expect(actual).toEqual(expected);
  });
});
