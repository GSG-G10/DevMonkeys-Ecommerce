const {filterByCategory , FilterByPrice} = require ("../js/logic.js");
describe("filterByCategory and FilterByPrice Function tests", () => {
    const products = [
        {category: 'T-shirt', price: 5},
        {category: 'pijames', price: 10},
        {category: 'shoes', price: 50},
        {category: 'T-shirt', price: 95},
        {category: 'bags', price: 100},
        {category: 'pants', price: 1000}
      
    ];
    test("it should return products have the same input category", () => {
        const actual = filterByCategory("T-shirt");
        const expected = [
            { category: 'T-shirt', price: 5 },
            { category: 'T-shirt', price: 95 }
        ];
        expect(actual).toEqual(expected);
        // expect(actual).toEqual(
        //     expect.arrayContaining([
        //       expect.objectContaining({category:"T-shirt"}),
        //     ])
        //   );
    });
    test("it should return prices", () => {
      

        const actual = FilterByPrice(10);
        const expected = [
            {category: 'T-shirt', price: 5},
            {category: 'pijames', price: 10}
        ];
        expect(actual).toEqual(expected);
    });
});