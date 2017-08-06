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
            throw RangeError;
        }
        return this.array[this.currentValue];
    };
    ;
    return ArrayIterator;
}());
exports.ArrayIterator = ArrayIterator;
