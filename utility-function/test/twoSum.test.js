const getSum = require('../sumBetween')
const twoSum = require('../twoSum')

test('add (1,4) to equal to 10', () => {
    expect(getSum(1, 4)).toBe(10);
});

test('add (1,5) to equal to 15', () => {
    expect(getSum(1, 5)).toBe(15);
});

test('add ([2,7,9,12]) to equal to [0,1]', () => {
    expect(twoSum([2, 7, 9, 12], 9)).toEqual([0, 1]);
});
test('add ([2,2,9,12],4) to equal to [0,1]', () => {
    expect(twoSum([2, 2, 9, 12], 4)).toEqual([0, 1]);
});

