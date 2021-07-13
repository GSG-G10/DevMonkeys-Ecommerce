const {search} = require('../js/logic');

describe('Testing search return value', () => {
	test('Search', () => {
        const arr= [{id:0, name: 't-shirt', price: 20},
        {id:1, name: 'top', price: 30},
        {id:2, name: 'pants', price: 40}];
        const nameToBeSearched= 'top';
		const actual = search(arr, nameToBeSearched);
		const expected = [{id:1, name: 'top', price: 30}];
		expect(actual).toEqual(expected);
	});
});