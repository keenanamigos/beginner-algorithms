export interface IIterator {
    first(): void;
    last(): void;
    isDone(): boolean;
    next(): void;
    previous(): void;
    current(): any;
}