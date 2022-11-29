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
}

let account = new Account(1, 'Zubayer', 0)

account.deposit(100)
console.log(account.deposit);
account.balance = 1

console.log(typeof account);
console.log(account instanceof Account);

/* index signature */
class SeatAssignment {
    // A1, A2, ...
    // John, Zubayer
    [seatNumber: string]: string
}
let seats = new SeatAssignment();
seats.A1 = 'Zubayer'
seats.A2 = 'John'
seats['A3'] = 'Mosh'