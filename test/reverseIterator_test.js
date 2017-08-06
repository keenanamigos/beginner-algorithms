var expect = require('chai').expect;

describe('Forward Iteration (Reverse)', () => {
    const testArray = ["A", "B", "C"];
    const ReverseIterator = require('../src/Iterators/ReverseIterator').ReverseIterator;
    const ArrayIterator = require('../src/Iterators/ArrayIterator').ArrayIterator;
    let iterator = new ReverseIterator(new ArrayIterator(testArray));

    iterator.first();
    it('should return false', () => {
        expect(iterator.isDone()).to.be.false;
    });

    it('should be equal to the last element in the array', () => {
        expect(testArray[2]).to.equal(iterator.current());
    });
});