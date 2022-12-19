class Account {
    // optional property
    nickname?: string;

    constructor(
        public readonly id: number, 
        public owner: string, 
        private _balance: number
    ) {
    }

    deposit(amount: number): void {
        if (amount<= 0) 
            throw new Error("Invalid amount");
        
        this._balance += amount   
    }

    get balance(): number {
        return this._balance
    }

    set balance(value: number){
        if(value < 0)
            throw new Error("Invalid value");
        this._balance = value
    }

    // private method
    // private calculateTax() {

    // }

    // set balance(value: number) {
    //     if(value < 0)
    //         throw new Error("Invalid value");
    //     this._balance = value
    // }
}

let account = new Account(1, 'Zubayer', 0)
console.log(account.balance);
// account.balance = 1

account.deposit(100)
console.log(account.deposit);
account.balance = 1

console.log(typeof account);
console.log(account instanceof Account);

/* index signature */
class SeatAssignment {
    // A1, A2, ...
    // John, Zubayer
    // by index signature create property dynamically
    [seatNumber: string]: string
}
let seats = new SeatAssignment();
seats.A1 = 'Zubayer'
seats.A2 = 'John'
seats['A3'] = 'Mosh'

/* static members */
class Ride {
    private static _activeRides: number = 0
    
    start() { Ride._activeRides++;}
    end() { Ride._activeRides--}

    static get activeRides() {
        return Ride._activeRides
    }
}
// fix bug to prevent reassign it by access modifier(private)
// Ride.activeRides = 40

// each object separate space in memory. each object independently traking activeRides. for that reason both will print 1 individuly. this is where we need to use static property to store activeRides in a single/global place. A static property is a property that is belong to class not a an object. there gonna have only one instance property on the memory
let ride1 = new Ride();  
ride1.start();

let ride2 = new Ride(); 
ride2.start();

console.log('activeRides', Ride.activeRides);
// console.log('ride1 activeRides', ride1.activeRides);
// console.log('ride2 activeRides', ride2.activeRides);

/* Inheritance */
class Person {
    constructor(public firstName: string, public lastName: string) {
    }

    get fullName() {
        return this.firstName + '' + this.lastName ;
    }

    walk() {
        console.log('walking'); 
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string){
        super(firstName, lastName)
    }

    takeTest(){
        console.log('taking test');
        
    }
}
let student = new Student(1, 'John', 'Doe')
student.takeTest
student.walk

class Teacher extends Person {
    override get fullName() {
        return 'Professor ' + super.fullName ;
    }
}

let teacher = new Teacher('John', 'Smith') // Teacher have no constructor, using parent constructor
console.log(teacher.fullName);


