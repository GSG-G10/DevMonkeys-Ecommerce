const { search } = require("../js/logic");
const { addItem } = require("../js/logic");

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
