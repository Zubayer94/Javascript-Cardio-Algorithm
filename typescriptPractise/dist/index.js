"use strict";
let x = 123456789;
console.log(x);
function render(document) {
    console.log(document);
}
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
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
})(Size || (Size = {}));
;
let mySize = Size.Large;
console.log(mySize);
//# sourceMappingURL=index.js.map