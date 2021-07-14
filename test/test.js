const { search, addItem, editItem, sumCart } = require("../js/logic");

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
