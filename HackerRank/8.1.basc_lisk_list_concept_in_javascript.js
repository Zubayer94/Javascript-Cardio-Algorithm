/*
    The entry point to a linked list is called the head. The head is a reference to the first node in the linked list. The last node on the list points to null. If a list is empty, the head is a null reference. Each element (commonly called nodes) contains two items: the data stored and a link to the next node. The data can be any valid data type.

    In JavaScript, a linked list looks like this:

    const list = {
        head: {
            value: 6
            next: {
                value: 10                                             
                next: {
                    value: 12
                    next: {
                        value: 3
                        next: null	
                        }
                    }
                }
            }
        }
    };
*/

// Implementing a List Node in JavaScript
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// Implementing a Linked List in JavaScript
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

/* 
    Putting it all together
    Let's create a linked list with the class we just created. First, we create two list nodes, node1 and node2 and a pointer from node 1 to node 2. 
*/

let node1 = new Node(2)
let node2 = new Node(5)
node1.next = node2

// Next, we'll create a Linked list with the node1.

let list = new LinkedList(node1)

// Let's try to access the nodes in the list we just created.

console.log(list.head.next.data) //returns 5

// This method returns the number of nodes present in the linked list.
LinkedList.prototype.size = () => {
    let count = 0;
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}

// This method empties out the list.
LinkedList.prototype.clear = () => {
    this.head = null;
}

// This method returns the last node of the linked list.
LinkedList.prototype.getLast = () => {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
}