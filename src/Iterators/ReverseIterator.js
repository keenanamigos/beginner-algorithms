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
    ReverseIterator.prototype.last = function () {
        this.iterator.first();
    };
    ;
    ReverseIterator.prototype.first = function () {
        this.iterator.last();
    };
    ;
    ReverseIterator.prototype.isDone = function () {
        return this.iterator.isDone();
    };
    ;
    ReverseIterator.prototype.next = function () {
        this.iterator.previous();
    };
    ;
    ReverseIterator.prototype.previous = function () {
        this.iterator.next();
    };
    ;
    ReverseIterator.prototype.current = function () {
        return this.iterator.current();
    };
    ;
    return ReverseIterator;
}());
exports.ReverseIterator = ReverseIterator;
