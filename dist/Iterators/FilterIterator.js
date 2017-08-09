"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FilterIterator {
    // Constructor
    constructor(iterator, predicate) {
        if (iterator !== null && predicate !== null) {
            this.iterator = iterator;
            this.predicate = predicate;
        }
    }
    // Class Methods
    isDone() {
        return this.iterator.isDone();
    }
    current() {
        if (this.isDone()) {
            throw new RangeError("This index you are trying to access is out of bounds");
        }
        return this.iterator.current();
    }
    first() {
        this.iterator.first();
        this.filterForwards();
    }
    next() {
        this.iterator.next();
        this.filterForwards();
    }
    filterForwards() {
        while (!this.iterator.isDone() && !this.predicate.evaluate(this.iterator.current())) {
            this.iterator.next();
        }
    }
    last() {
        this.iterator.last();
        this.filterBackwards();
    }
    previous() {
        this.iterator.previous();
        this.filterBackwards();
    }
    filterBackwards() {
        while (!this.iterator.isDone() && !this.predicate.evaluate(this.iterator.current())) {
            this.iterator.previous();
        }
    }
}
exports.FilterIterator = FilterIterator;
