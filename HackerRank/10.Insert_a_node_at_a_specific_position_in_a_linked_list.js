/*
 * Complete the 'insertNodeAtPosition' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER data
 *  3. INTEGER position
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

function insertNodeAtPosition(head, data, position) {
    let count = 0;
    let prev = null;
    let current = head;
    let newNode = new SinglyLinkedListNode(data);

    while (count < position && current) {
        prev = current;
        current = current.next;
        count++;
    }

    if (prev) {
        prev.next = newNode;
        newNode.next = current;
    }

    return head;

}