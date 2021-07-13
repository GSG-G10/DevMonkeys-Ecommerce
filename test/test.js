const {addItem} = require('../js/logic');


// Add Product to Cart
describe('Testing product items', () => {
    test('Should return array with new item when given an array', () => {
        const array = [{ id: '1' }, { id: '2' }];
        const item = { id: '3' };
        const actual = addItem(array, item);
        const expected = [...array, item]
        expect(actual).toEqual(expected);
    });
});
