"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReverseIterator {
    // Constructor
    constructor(iterator) {
        if (iterator !== null) {
            this.iterator = iterator;
        }
    }
    // Class Methods    
    last() {
        this.iterator.first();
    }
    ;
    first() {
        this.iterator.last();
    }
    ;
    isDone() {
        return this.iterator.isDone();
    }
    ;
    next() {
        this.iterator.previous();
    }
    ;
    previous() {
        this.iterator.next();
    }
    ;
    current() {
        return this.iterator.current();
    }
    ;
}
exports.ReverseIterator = ReverseIterator;
