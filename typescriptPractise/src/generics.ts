class StringKeyValuePair {
    constructor(public key: string, public value: string){}
}
class KeyValuePair {
    constructor(public key: number, public value: string){}
}

let pair = new KeyValuePair(1, 'Apple')
let stringPair = new StringKeyValuePair('1', 'Apple')

/* understanding the problem
we colud solved it using any, but we loose type checking, intellence, properties & method available in that object. For that reason we don't use any. 
other solution is duplicate the class. But it will increase redundency as development pase increases.
*/

/* Generic Constraints -> common and reuseable solution */
/* generic classes */
/* T is generic type perameters. This idea comes from c++. In c++ this classes are called template classes. Generics classes are same as template classes in c++. T in short is template  */
class KeyValuePairClass<T, U>{ 
    constructor(public key: T, public value: U){}
}

// let pairfinal = new KeyValuePairClass<string, string>('1', 'a')
let pairfinal = new KeyValuePairClass('1', 'a') // most of the time we don't have to explecitely supply generics, the compiler can infer the type of the value
// pairfinal.key

/* Generic Function */
class ArrayUtils {
    static wrapArray<T>(value: T) {
        return [value];
    }
}
function wrapInArray<T>(value: T) {
    return [value]
}

// let number = wrapInArray(1)
let number = ArrayUtils.wrapArray(1)

// function echo<T>(value: T): T {
//     return value
// }

/* Generic Interfaces */
interface Result<T> {
    data: T | null,
    error: string | null
}

function fetch<T>(url: string): Result<T> {
    return {data: null, error: null}
}

interface User {
    username: string
}

interface Product {
    title: string
}

// let result = fetch<User>('url')
// result.data?.username
/* or */
let result = fetch<Product>('url')
result.data?.title

/* Generic Constraints */
/* to constraint/limit the type or shape of an object */

// constraint by type
// function echo<T extends number | string>(value:T): T {
//     return value
// }

// constraint by interface
// interface Person {
//     name: string
// }
// function echo<T extends Person>(value:T): T {
//     return value
// }

// constraint by class
class Car{
    constructor(public name: string) {}
}

class BMW extends Car {}

function echo<T extends Car>(value:T): T {
    return value
}

echo(new Car('BMW x29'))

/* Extending Generic Classes */
interface Product {
    name: string,
    price: number
}

class Store <T>{
    protected _object: T[] = [];
    add(obj: T): void {
        this._object.push(obj)
    }
}

// Pass on the generic type parameter. The generic type parameter that we have in base class is also gonna be use in child class
class CompressibleStore<T> extends Store<T> {
    compress() {}
}

let store = new CompressibleStore<Product>()
store.compress()

// restricting geniric type parameter
class SearchableStore<T extends {name: string} > extends Store<T> {
    find(name: string): T | undefined {
        return this._object.find(obj => obj.name === name)
    } 
}

// Fix/terminate the generic type parameter 
class ProductStore extends Store<Product> {
    filterByCategory(category: string): Product[] {
        return [];
    }
}


