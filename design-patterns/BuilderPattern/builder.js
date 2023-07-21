/* 
    Builder is a creational design pattern that lets you construct complex objects step by step. 
    The pattern allows you to produce different types and representations of an object using the same construction code. 
*/

/* 
    The Problem:
    We want to create a complex object, but we don't want to have a complex constructor member or one that would need a lot of parameters.
*/
class Address {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}

class User {
    constructor(name, age, phone, address) {
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}

const user = new User('Bob', undefined, undefined, new Address('12345', 'Main St.'))

// if the user doesn't have an age or phone number, we have to pass undefined, and it's not clear what the arguments are for.
// if the number of arguments increases, it becomes even more confusing.

/* 
    Traditional Builder Pattern:
*/
class Address2 {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}

class User2 {
    constructor(name) {
        this.name = name
    }
}

class UserBuilder {
    constructor(name) {
        this.user = new User2(name)
    }

    setAge(age) {
        this.user.age = age
        return this
    }

    setPhone(phone) {
        this.user.phone = phone
        return this
    }

    setAddress(address) {
        this.user.address = address
        return this
    }

    build() {
        return this.user
    }
}

const builder = new UserBuilder('Bob')
const user2 = builder.setAddress(new Address2('12345', 'Main St.')).build()

/* 
    Modern way of Builder Pattern:
*/
class Address3 {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}

class User3 {
    constructor(name, { age, phone = '123-456-7890', address } = {}) {
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}

let user3 = new User3('Bob', { address: new Address3('12345', 'Main St.') })