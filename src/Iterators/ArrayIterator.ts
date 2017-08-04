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
            throw new RangeError;
        }
        
        return this.array[this.currentValue]; 
    };
}

// Tests until Mocha is working
console.log("/* Iteration Respects Bounds */");
const testArray = ["A", "B", "C", "D", "E", "F"];
let iterator = new ArrayIterator(testArray, 1, 3);

iterator.first();
console.log(iterator.isDone()) // Should return false [PASS]
console.log(testArray[1] === iterator.current()) // Should return true [PASS]

iterator.next();
console.log(iterator.isDone()) // Should return false [PASS]
console.log(testArray[2] === iterator.current()) // Should return true [PASS]

iterator.next();
console.log(iterator.isDone()) // Should return false [PASS]
console.log(testArray[3] === iterator.current()) // Should return true [PASS]

iterator.next();
console.log(iterator.isDone()) // Should return true [PASS]
// console.log(iterator.current()); // Throws correct error [RangeError] [PASS]

console.log("-------------------------");
console.log("/* Backwards Iteration */");
const newTestArray = ["A", "B", "C"];
let someIterator = new ArrayIterator(newTestArray);

someIterator.last();
console.log(someIterator.isDone()) // Shoud return false [PASS]
console.log(newTestArray[2] === someIterator.current()); // Should return true

someIterator.previous();
console.log(someIterator.isDone()) // Shoud return false [PASS]
console.log(newTestArray[1] === someIterator.current()); // Should return true [PASS]

someIterator.previous();
console.log(someIterator.isDone()) // Shoud return false [PASS]
console.log(newTestArray[0] === someIterator.current()); // Should return true [PASS]

someIterator.previous();
console.log(someIterator.isDone()) // Shoud return true [PASS]
// console.log(someIterator.current()); // Throws correct error [RangeError] [PASS]