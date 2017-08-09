"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayIterator {
    // Constructor
    constructor(array, start = 0, length = array.length) {
        this.currentValue = -1;
        const lastCheck = start + length - 1;
        if (array !== null && start >= 0 && start < array.length && length >= 0 && lastCheck < array.length) {
            this.array = array;
            this.start = start;
            this.end = start + length - 1;
        }
    }
    // Class Methods
    first() {
        this.currentValue = this.start;
    }
    ;
    last() {
        this.currentValue = this.end;
    }
    ;
    isDone() {
        return this.currentValue < this.start || this.currentValue > this.end;
    }
    ;
    next() {
        this.currentValue++;
    }
    ;
    previous() {
        this.currentValue--;
    }
    ;
    current() {
        if (this.isDone()) {
            throw new RangeError("This index you are trying to access is out of bounds");
        }
        return this.array[this.currentValue];
    }
    ;
}
exports.ArrayIterator = ArrayIterator;
