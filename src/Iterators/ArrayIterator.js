"use strict";
exports.__esModule = true;
var ArrayIterator = (function () {
    // Constructor
    function ArrayIterator(array, start, length) {
        if (start === void 0) { start = 0; }
        if (length === void 0) { length = array.length; }
        this.currentValue = -1;
        var lastCheck = start + length - 1;
        if (array !== null && start >= 0 && start < array.length && length >= 0 && lastCheck < array.length) {
            this.array = array;
            this.start = start;
            this.end = start + length - 1;
        }
    }
    // Class Methods
    ArrayIterator.prototype.first = function () {
        this.currentValue = this.start;
    };
    ;
    ArrayIterator.prototype.last = function () {
        this.currentValue = this.end;
    };
    ;
    ArrayIterator.prototype.isDone = function () {
        return this.currentValue < this.start || this.currentValue > this.end;
    };
    ;
    ArrayIterator.prototype.next = function () {
        this.currentValue++;
    };
    ;
    ArrayIterator.prototype.previous = function () {
        this.currentValue--;
    };
    ;
    ArrayIterator.prototype.current = function () {
        if (this.isDone()) {
            throw new RangeError;
        }
        return this.array[this.currentValue];
    };
    ;
    return ArrayIterator;
}());
exports.ArrayIterator = ArrayIterator;
// Tests until Mocha is working
console.log("/* Iteration Respects Bounds */");
var testArray = ["A", "B", "C", "D", "E", "F"];
var iterator = new ArrayIterator(testArray, 1, 3);
iterator.first();
console.log(iterator.isDone()); // Should return false [PASS]
console.log(testArray[1] === iterator.current()); // Should return true [PASS]
iterator.next();
console.log(iterator.isDone()); // Should return false [PASS]
console.log(testArray[2] === iterator.current()); // Should return true [PASS]
iterator.next();
console.log(iterator.isDone()); // Should return false [PASS]
console.log(testArray[3] === iterator.current()); // Should return true [PASS]
iterator.next();
console.log(iterator.isDone()); // Should return true [PASS]
// console.log(iterator.current()); // Throws correct error [RangeError] [PASS]
console.log("-------------------------");
console.log("/* Backwards Iteration */");
var newTestArray = ["A", "B", "C"];
var someIterator = new ArrayIterator(newTestArray);
someIterator.last();
console.log(someIterator.isDone()); // Shoud return false [PASS]
console.log(newTestArray[2] === someIterator.current()); // Should return true
someIterator.previous();
console.log(someIterator.isDone()); // Shoud return false [PASS]
console.log(newTestArray[1] === someIterator.current()); // Should return true [PASS]
someIterator.previous();
console.log(someIterator.isDone()); // Shoud return false [PASS]
console.log(newTestArray[0] === someIterator.current()); // Should return true [PASS]
someIterator.previous();
console.log(someIterator.isDone()); // Shoud return true [PASS]
// console.log(someIterator.current()); // Throws correct error [RangeError] [PASS] 
