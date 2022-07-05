class Stack {
    constructor() {
        this.items = []
    }

    unshift(element) {
        return this.items.unshift(element)
    }

    pop() {
        return this.items.pop()
    }

    printStack() {
        console.log('------printing------');
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}

const stack = new Stack();
stack.unshift(1)
stack.unshift(2)
stack.unshift(3)
stack.printStack()
stack.pop()
stack.printStack()
