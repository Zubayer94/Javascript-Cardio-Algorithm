"use strict";
var _a;
let x = 123456789;
console.log(x);
let numArray = [1, 2, 3];
let user = [1, 'zubayer'];
user.push(1);
const small = 1;
const medium = 2;
const large = 3;
var AnotherSize;
(function (AnotherSize) {
    AnotherSize[AnotherSize["Small"] = 0] = "Small";
    AnotherSize[AnotherSize["Medium"] = 1] = "Medium";
    AnotherSize[AnotherSize["Large"] = 2] = "Large";
})(AnotherSize || (AnotherSize = {}));
;
var AnotherSize2;
(function (AnotherSize2) {
    AnotherSize2[AnotherSize2["Small"] = 1] = "Small";
    AnotherSize2[AnotherSize2["Medium"] = 2] = "Medium";
    AnotherSize2[AnotherSize2["Large"] = 3] = "Large";
})(AnotherSize2 || (AnotherSize2 = {}));
;
;
let mySize = "l";
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: 'zuabyer',
    retire: (date) => {
        console.log(date);
    }
};
function render(document) {
    if (typeof document === 'string') {
        document.toUpperCase();
    }
}
function reject(message) {
    throw new Error(message);
}
function processEvents() {
    while (true) {
    }
}
console.log('end of the code');
function kgToLbs(weight) {
    if (typeof weight == 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 1.5;
    }
}
kgToLbs(10);
kgToLbs('10');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else
        console.log('hola!');
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let logFun = null;
logFun === null || logFun === void 0 ? void 0 : logFun('a');
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
//# sourceMappingURL=index.js.map