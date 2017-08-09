import { IIterator } from "./IteratorInterface"

export class ArrayIterator implements IIterator {
    // Constructor
    public constructor(array: any, start: number = 0, length: number = array.length) {
        const lastCheck = start + length - 1;
        
        if (array !== null && start >= 0 && start < array.length && length >= 0 && lastCheck < array.length) {
            this.array = array;
            this.start = start;
            this.end = start + length - 1;
        }
    }
    
    // Class Variables
    private readonly array: any; // array type
    private readonly start: number; 
    private readonly end: number;
    private currentValue: number = -1;
    
    // Class Methods
    public first(): void {
      this.currentValue = this.start;  
    };
    
    public last(): void {
        this.currentValue = this.end;    
    };
    
    public isDone(): boolean {
        return this.currentValue < this.start || this.currentValue > this.end;    
    };
    
    public next(): void {
        this.currentValue++;    
    };
    
    public previous(): void {
        this.currentValue--;    
    };
    
    public current(): any {
        if (this.isDone()) {
            throw new RangeError("This index you are trying to access is out of bounds");
        }
        
        return this.array[this.currentValue]; 
    };
}