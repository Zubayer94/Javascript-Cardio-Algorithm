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

