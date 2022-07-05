/*
 * Complete the 'reversePrint' function below.
 *
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function reversePrint(llist) {

    // appraoch 1: using stack
    let stackList = [];
    if (!llist.data) return

    let current = llist
    while (current) {
        stackList.push(current.data)
        current = current.next
    }

    while (stackList.length) {
        console.log(stackList.pop());
    }

    // approach 2: using recursive function
    // if (llist !== null) {
    //     reversePrint(llist.next);
    //     console.log(llist.data)
    // }
}