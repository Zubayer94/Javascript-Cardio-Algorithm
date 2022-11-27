let x: number = 123_456_789
console.log(x);

// function render(document: any) {
//     console.log(document);
// }

let numArray: number[] = [1, 2, 3]

// touple
let user: [number, string] = [1, 'zubayer'] // touple is fixed length array where is element is perticular type
user.push(1); // compiler would not complain

// enums
const small = 1
const medium = 2
const large = 3

enum AnotherSize {Small, Medium, Large};
enum AnotherSize2 {Small=1, Medium, Large};
const enum Size {Small = 's', Medium='m', Large='l'};
let mySize: Size = Size.Large;
console.log(mySize);

// functions
function calculateTax(income:number, taxYear = 2022): number {
    if (taxYear < 2022) 
        return income * 1.2
    return income * 1.3
}
calculateTax(10_000)

//objects
// type alias
type Employee = {
    readonly id: number, // can't modify it
    name?: String,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: 'zuabyer',
    retire: (date: Date) => {
        console.log(date)
    }
}

/* advanced types */

// the unknown type
function render(document: unknown) {
    if (typeof document === 'string') {
        document.toUpperCase();
    }
    // if (document instanceof WordDocument) {
    //     document.toUpperCase();
    // }
    // document.move();
    // document.fly();
}

/* the never type */
function reject(message: string): never {
    throw new Error(message);
}

function processEvents(): never {
    while(true) {

    }
}

// reject('...')
console.log('end of the code');


/* union types */
function kgToLbs(weight: number | string): number {
    if(typeof weight == 'number') {
        return weight * 2.2
    }
    else {
        return parseInt(weight) * 1.5
    }
}

kgToLbs(10)
kgToLbs('10')

/* intersection types */
// let weight: number & string;
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

/* literal (exact, specific) */
// let quantity: 50 = 50 ; // exact
// let quantity: 50 | 100 = 100; // 
type Quantity = 50 | 100;
let quantity: Quantity = 100; // 

type Metric = 'cm' | 'inch'

/* nullable types */
function greet(name: string | null | undefined ) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else
        console.log('hola!');
        
}

greet(undefined)

/* optinal chaining */
type Customer = {
    birthday?: Date
}
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date() }
}

let customer = getCustomer(0)
/* optional chaning access operator */
console.log(customer?.birthday?.getFullYear());
// console.log(customer.birthday.getFullYear());

/* optional element access operator */
// if(customer !== null && customer !== undefined) // doesn't need to check if we use optional element access operator(?.)
    // customer?.[0]

/* optiona call operatior */
// let logFun : any = (message: string) => console.log(message);
let logFun : any = null;
logFun?.('a') // will executed only if logFun referencing an actual function other will get undefined

/* Nullish Coaelscing Operator */
let speed: number | null = null
// falsy => undefined, null, '', false, 0 
let ride = {
    // speed: speed || 30 // 0 will be falsy here but speed can be 0
    // speed: speed !== null ? speed : 30 // only check null
    // Nullish Coaelscing Operator (??) // checks if there is null or undefined variable
    speed: speed ?? 30 // this is better way
}

/* *** Type Assertions */
let phone = <HTMLInputElement> document.getElementById('phone')
// HTMLElement
// HTMLInputElement
// phone.value

/* The any type */
// using the unknown type is preferd  to using the any type
function testRender(document: unknown) {
    // if we use unknown type instead of any type, then we need to type Narrowing
    if (typeof document == 'string' ) {
        document.toUpperCase();
    }
    // if we have custom object created with classes the we need to use instanceof
    // if ( document instanceof wordDocument ) {
    //     document.toUpperCase();
    // }
    // document.move();
    // document.fly();
}




