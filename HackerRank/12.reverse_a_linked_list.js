/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
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

function reverse(llist) {
    // 1. Initialize three pointers prev as NULL, curr as head and next as NULL.
    // 2. Iterate through the linked list. In loop, do following.
        // // Before changing next of current,
        // // store next node
        // next = curr->next
        // // Now change next of current
        // // This is where actual reversing happens
        // curr->next = prev
        // // Move prev and curr one step forward
        // prev = curr
        // curr = next
        
    let current = llist;
    let prev = null;
    let next = null;
    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next
    }
    llist = prev
    return llist
}