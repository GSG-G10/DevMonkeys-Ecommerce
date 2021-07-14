const {filterByCategory , FilterByPrice ,search,addItem , deleteItem, search, addItem, editItem, sumCart} = require ("../js/logic.js");
describe("filterByCategory and FilterByPrice Function tests", () => {
  const products = [
    {id: 1 ,category: 'T-shirt', price: 5 },
    {id :2,category: 'pijames', price: 10},
    {id :3,category: 'shoes', price: 50},
    {id :4,category: 'T-shirt', price: 95},
    {id :5,category: 'bags', price: 100},
    {id :6,category: 'pants', price: 1000}
  
];
    // filter by category function
    test("it should return products have the same input category", () => {
        const actual = filterByCategory("T-shirt");
        const expected = [
            { id:1,category: 'T-shirt', price: 5 },
            { id:4,category: 'T-shirt', price: 95 }
        ];
        expect(actual).toEqual(expected);
    });
    // filter by price function
    test("it should return item filter by price", () => {
      

        const actual = FilterByPrice(10);
        const expected = [
            {id:1,category: 'T-shirt', price: 5},
            {id:2,category: 'pijames', price: 10}
        ];
        expect(actual).toEqual(expected);
    });
});

describe("delete function tests", () => {
  const products = [
    {id: 1 ,category: 'T-shirt', price: 5 },
    {id :2,category: 'pijames', price: 10},
    {id :3,category: 'shoes', price: 50},
    {id :4,category: 'T-shirt', price: 95},
    {id :5,category: 'bags', price: 100},
    {id :6,category: 'pants', price: 1000}
  
];
  // delete function
  test("delete an item in the array", () => {
      const item = {id:1 ,category: 'T-shirt', price: 5};
      const actual = deleteItem(products ,item);
      const expected = [
        
        {id :2,category: 'pijames', price: 10},
        {id :3,category: 'shoes', price: 50},
        {id :4,category: 'T-shirt', price: 95},
        {id :5,category: 'bags', price: 100},
        {id :6,category: 'pants', price: 1000}
      
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

// sum cart
describe("sum cart", () => {
  test("sum the total of all items in cart", () => {
    const cart = [
      { id: 0, name: "t-shirt", price: 20 },
      { id: 1, name: "top", price: 30 },
      { id: 2, name: "pants", price: 40 },
    ];
    const actual = sumCart(cart);
    const expected = 20 + 30 + 40;
    expect(actual).toBe(expected);
  });
});
//Edit item
describe("Edit item", () => {
  test("editing the first item in the array", () => {
    const arr = [
      { id: 0, name: "t-shirt", price: 20 },
      { id: 1, name: "top", price: 30 },
      { id: 2, name: "pants", price: 40 },
    ];
    const actual = editItem(arr, 0, { name: "full-shirt", price: 40 });
    const expected = [
      { id: 0, name: "full-shirt", price: 40 },
      { id: 1, name: "top", price: 30 },
      { id: 2, name: "pants", price: 40 },
    ];
    console.log(actual);
    expect(actual).toEqual(expected);
  });

  test("editing the 2nd item in the array", () => {
    const arr = [
      { id: 0, name: "t-shirt", price: 20 },
      { id: 1, name: "top", price: 30 },
      { id: 2, name: "pants", price: 40 },
    ];
    const actual = editItem(arr, 1, { name: "bot" });
    const expected = [
      { id: 0, name: "t-shirt", price: 20 },
      { id: 1, name: "bot", price: 30 },
      { id: 2, name: "pants", price: 40 },
    ];
    expect(actual).toEqual(expected);
  });

  test("trying to edit a non-existent id, do nothing", () => {
    const arr = [
      { id: 0, name: "t-shirt", price: 20 },
      { id: 1, name: "top", price: 30 },
      { id: 2, name: "pants", price: 40 },
    ];
    const actual = editItem(arr, 4, { name: "full-shirt", price: 40 });
    const expected = [
      { id: 0, name: "t-shirt", price: 20 },
      { id: 1, name: "top", price: 30 },
      { id: 2, name: "pants", price: 40 },
    ];
    expect(actual).toEqual(expected);
  });
});
