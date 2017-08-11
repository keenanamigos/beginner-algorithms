import { IIterator } from "../Iterators/IteratorInterface"

export interface IList {
    iterator(): IIterator; // interfaces can't implement other interfaces
    insert(index: number, value: any) : void // value should be an object
    add(value: any) : void // value should be an object
    delete(index: number) : any // expected to return an object & throw RangeError
    delete(value: any) : boolean // value should be an object
    clear() : void
    set(index: number, value: any) // value should be an object & throw RangeError
    get(index: number) : any // expected to return an object & throw RangeError
    indexOf(value: any) : number // value should be an object
    contains(value: any) : boolean // value should be an object
    size() : number
    isEmpty() : boolean
}