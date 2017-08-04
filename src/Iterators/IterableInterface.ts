import { IIterator } from "./IteratorInterface"

interface IIterable {
    iterator(): IIterator;
}