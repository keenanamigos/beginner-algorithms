import { Predicate } from '../Predicate/Predicate'
import { IIterator } from './IteratorInterface'

export class FilterIterator implements IIterator {
    // Constructor
    public constructor(iterator : IIterator, predicate : Predicate) {
        if (iterator !== null && predicate !== null) {
            this.iterator = iterator;
            this.predicate = predicate;
        }
    }

    // Class Variables
    private readonly iterator : IIterator;
    private readonly predicate : Predicate;

    // Class Methods
    public isDone() : boolean {
        return this.iterator.isDone();
    }

    public current() : any {
        if (this.isDone()) {
            throw new RangeError("This index you are trying to access is out of bounds");
        }

        return this.iterator.current();
    }

    public first(): void {
        this.iterator.first();
        this.filterForwards();
    }

    public next(): void {
        this.iterator.next();
        this.filterForwards();
    }

    private filterForwards(): void {
        while (!this.iterator.isDone() && !this.predicate.evaluate(this.iterator.current())) {
            this.iterator.next();
        }
    }

    public last(): void {
        this.iterator.last();
        this.filterBackwards();
    }

    public previous(): void {
        this.iterator.previous();
        this.filterBackwards();
    }

    private filterBackwards(): void {
        while (!this.iterator.isDone() && !this.predicate.evaluate(this.iterator.current())) {
            this.iterator.previous();
        }
    }
}