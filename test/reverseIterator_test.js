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

    it('should return false', () => {
        iterator.next();
        expect(iterator.isDone()).to.be.false;
    });

    it('should be equal to the second element in the array', () => {
        expect(testArray[1]).to.equal(iterator.current());
    });

    it('should return false', () => {
        iterator.next();
        expect(iterator.isDone()).to.be.false;
    });

    it('should be equal to the first element in the array', () => {
        expect(testArray[0]).to.equal(iterator.current());
    });

    it('should return true', () => {
        iterator.next();
        expect(iterator.isDone()).to.be.true;
    });
});

describe('Backwards Iteration (Reverse', () => {
    const testArray = ["A", "B", "C"];
    const ReverseIterator = require('../src/Iterators/ReverseIterator').ReverseIterator;
    const ArrayIterator = require('../src/Iterators/ArrayIterator').ArrayIterator;
    let iterator = new ReverseIterator(new ArrayIterator(testArray));

    iterator.last();
    it('should be false', () => {
        expect(iterator.isDone()).to.be.false;
    });

    it('should be equal to the first element in the array', () => {
        expect(testArray[0]).to.equal(iterator.current());
    });

    it('should be false', () => {
        iterator.previous();
        expect(iterator.isDone()).to.be.false;
    });

    it('should be equal to the second element in the array', () => {
        expect(testArray[1]).to.equal(iterator.current());
    });

    it('should be false', () => {
        iterator.previous();
        expect(iterator.isDone()).to.be.false;
    });

    it('should be equal to the last element in the array', () => {
        expect(testArray[2]).to.equal(iterator.current());
    });

    it('should be true', () => {
        iterator.previous();
        expect(iterator.isDone()).to.be.true;
    });
});