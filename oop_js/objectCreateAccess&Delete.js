//object defination
let person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue",
    fullName : function() {
        return `${this.firstName} ${this.lastName}`;
    },
    get eyeClr() {
        return this.eyeColor;
    },
    set eyeClr(eyeClr) {
        this.eyeColor = eyeClr;
    }
};
var x = person;
x.age = 40; // This will change both x.age and person.age
console.log('First printing person: ', person);
console.log('First printing person in x : ', x);

// Accessing Object Methods
console.log('Accessing Object Method named fullname : ',person.fullName());

//JavaScript Accessors (Getters and Setters), Getters and setters allow you to define Object Accessors (Computed Properties).
// using Getter
console.log('Using getter: ',person.eyeClr);

// using Getter
person.eyeClr = "Green"
console.log('After Using setter: ',person);

//note for/of loops through the values of an iterable objects such as Arrays, Strings, Maps, NodeLists, and more.
//note for/in loops through the properties of an object

//Looping through the properties of an object:
console.log('object properties: ');
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(person[key]);
    }
}
//Special Note: You must use person[x] in the loop. person.x will not work (Because x is a variable).

//Without Looping, printing object values in an array:
console.log('Object values in an array: ', Object.values(person));

console.log('objectkeys: ');
//Looping through the keys of an object:
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key);
    }
}
//Without Looping, printing object keys in an array:
console.log('Object keys in an array: ', Object.keys(person));

//object can be stringified (converted to a string) with the JavaScript function JSON.stringify():
console.log('Object stringified (converted to a string): ', JSON.stringify(person));

// adding new property on the object:
person.country = 'Bangladesh';
console.log('printing person object after adding country property: ', person);

// adding new property on the object:
delete person.age
console.log('printing person object after deleting age property: ', person);

// editing property on the object:
person.country = 'Uk'
console.log('printing person object after editing country property: ', person);

// adding function on the object:
person.name  = function() {
    return `${this.firstName}  ${this.lastName} `;
}
console.log('printing person object after adding function on property: ', person);
console.log(person.name());

console.log('Object topic ends, Constructor topic starts =>');

//Making JS Constructor 
function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.name = function() {
        return `${this.firstName} ${this.lastName}`
    };
    this.changeFirstName = function(firstName){
        this.firstName = firstName;
    }
    // **** note: Can not add new methods and property to a Constructor after initializing it but object can do it :) 
}
// Prototype on a Constructor 
// Prototype lets us to add new properties (or methods) to all existing objects of a given type through Constructor ;)

//adding Property by Prototype 
Person.prototype.country = 'US'

//adding methods by Prototype  
Person.prototype.checkAge = function(){
    return `${this.firstName} is ${this.age} years old.`
}

//Instatiate an Object from Constructor
const father = new Person("Jane", "doe", 50, "Black")
father.changeFirstName('Bane'); // calling constructor predefined method through object
console.log('Object made throug Constructor: ',father);


console.log('Country property added through prototype: ',father.country);
console.log('age method added through prototype: ',father.checkAge());