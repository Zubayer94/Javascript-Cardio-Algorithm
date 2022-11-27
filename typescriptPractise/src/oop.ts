class Account {
    // read only property
    readonly id: number;
    owner: string;
    balance: number;
    // optional property
    nickname?: string;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount<= 0) 
            throw new Error("Invalid amount");
        
        this.balance += amount   
    }
}

let account = new Account(1, 'Zubayer', 0)

account.deposit(100)
console.log(typeof account);
console.log(account instanceof Account);


