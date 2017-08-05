import { IIterator } from "./IteratorInterface"

export class ReverseIterator implements IIterator {
    // Constructor
    public constructor(iterator: IIterator) {
        if (iterator !== null) {
            this.iterator = iterator;
        }
    }

    // Class Variables
    private readonly iterator: IIterator;

    // Class Methods
    public first(): void {
       return this.iterator.last();
    };
    
    public last(): void {
        return this.iterator.first();
    };
    
    public isDone(): boolean {
        return this.iterator.isDone();
    };
    
    public next(): void {
        return this.iterator.previous();
    };
    
    public previous(): void {
        return this.iterator.next();
    };
    
    public current(): any {
        return this.iterator.current(); 
    };
}