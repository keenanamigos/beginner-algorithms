var expect = require('chai').expect;

describe('Forward iteration', () => {
    const ArrayIterator = require('../src/Iterators/ArrayIterator').ArrayIterator;
    const testArray = ["A", "B", "C", "D", "E", "F"];
    let iterator = new ArrayIterator(testArray, 1, 3);

    iterator.first();
    it('should return false', () => {
        expect(iterator.isDone()).to.be.false;
    });

    it('should be equal to the second element of the array', () => {
        expect(testArray[1]).to.equal(iterator.current());
    });

    it('should return false', () => {
        iterator.next();
        expect(iterator.isDone()).to.be.false;
    });
    
    it('should be equal to the third element of the array', () => {
        expect(testArray[2]).to.equal(iterator.current());
    });

    it('should return false', () => {
        iterator.next();
        expect(iterator.isDone()).to.be.false;
    });

     it('should be equal to the fourth element of the array', () => {
        expect(testArray[3]).to.equal(iterator.current());
    });

    it('should return true', () => {
        iterator.next();
        expect(iterator.isDone()).to.be.true;
    });
});

describe('Backwards Iteration', () => {
    const someArray = ["A", "B", "C"];
    const ArrayIterator = require('../src/Iterators/ArrayIterator').ArrayIterator;
    let iterator = new ArrayIterator(someArray);

    iterator.last();
    it('should return false', () => {
        expect(iterator.isDone()).to.be.false;
    });

    it('should be equal to the last element in the array', () => {
        expect(someArray[2]).to.equal(iterator.current());
    }); 
    
    it('should return false', () => {
        iterator.previous();
        expect(iterator.isDone()).to.be.false;
    });

    it('shoud be equal to the second element in the array', () => {
        expect(someArray[1]).to.equal(iterator.current());
    });

    it('should return false', () => {
        iterator.previous();
        expect(iterator.isDone()).to.be.false;
    });

    it('should be equal to the first element in the array', () => {
        expect(someArray[0]).to.equal(iterator.current());
    });

    it('should return true', () => {
        iterator.previous();
        expect(iterator.isDone()).to.be.true;
    });
});