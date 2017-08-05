"use strict";
exports.__esModule = true;
var ReverseIterator = (function () {
    // Constructor
    function ReverseIterator(iterator) {
        if (iterator !== null) {
            this.iterator = iterator;
        }
    }
    // Class Methods
    ReverseIterator.prototype.first = function () {
        return this.iterator.last();
    };
    ;
    ReverseIterator.prototype.last = function () {
        return this.iterator.first();
    };
    ;
    ReverseIterator.prototype.isDone = function () {
        return this.iterator.isDone();
    };
    ;
    ReverseIterator.prototype.next = function () {
        return this.iterator.previous();
    };
    ;
    ReverseIterator.prototype.previous = function () {
        return this.iterator.next();
    };
    ;
    ReverseIterator.prototype.current = function () {
        return this.iterator.current();
    };
    ;
    return ReverseIterator;
}());
exports.ReverseIterator = ReverseIterator;
