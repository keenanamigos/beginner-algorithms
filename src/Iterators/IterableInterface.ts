import { IIterator } from "./IteratorInterface"

export interface IIterable {
    iterator(): IIterator;
}