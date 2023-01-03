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

/* Generic Constraints -> common and reuseable solution*/
function echo<T>(value: T): T {
    return value
}