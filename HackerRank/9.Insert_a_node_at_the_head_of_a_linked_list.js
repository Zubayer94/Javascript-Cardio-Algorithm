/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {
    let newNode = new SinglyLinkedListNode(data)
    if (!head) {
        head = newNode
        return newNode
    }
    newNode.next = head
    return newNode
}