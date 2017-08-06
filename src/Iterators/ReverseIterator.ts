import { IIterator } from "./IteratorInterface"

export class ReverseIterator implements IIterator {
    // Class Variables
    private readonly iterator: IIterator;

    // Constructor
    public constructor(iterator: IIterator) {
        if (iterator !== null) {
            this.iterator = iterator;
        }
    }

    // Class Methods    
    public last(): void {
        this.iterator.first();
    };

    public first(): void {
         this.iterator.last();
    };
    
    public isDone(): boolean {
        return this.iterator.isDone();
    };
    
    public next(): void {
        this.iterator.previous();
    };
    
    public previous(): void {
        this.iterator.next();
    };
    
    public current(): any {
        return this.iterator.current(); 
    };
}