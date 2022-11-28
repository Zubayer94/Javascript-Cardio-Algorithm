class Account {
    nickname?: string;

    constructor(
        public readonly id: number, 
        public owner: string, 
        private _balance: number) {

    }

    deposit(amount: number): void {
        if (amount<= 0) 
            throw new Error("Invalid amount");
        
        this._balance += amount   
    }

    private calculateTax() {

    }

    get balance(): number {
        return this._balance
    }

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
console.log(typeof account);
console.log(account instanceof Account);





