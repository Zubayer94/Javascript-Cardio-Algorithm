class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        return this.items.push(element)
    }

    pop() {
        return this.items.s()
    }

    printStack() {
        console.log('------printing------');
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}

const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.printStack()
stack.pop()
stack.printStack()
