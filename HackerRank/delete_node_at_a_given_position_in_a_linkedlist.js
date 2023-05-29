/*
 * Complete the 'deleteNode' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER position
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

function deleteNode(llist, position) {
    // Write your code here
    let count = 0;
    let current = llist;
    let newNode = null
    let newCurrent = null
    

    while (current) {
        if(count == position){
            current = current.next;
            count++;
            continue;
        }
            
        // console.log(current.data)
        if(!newNode && !newCurrent){
            newNode = new SinglyLinkedListNode(current.data)
            newCurrent = newNode              
        }
        else{
            newCurrent.next = new SinglyLinkedListNode(current.data)
            newCurrent = newCurrent.next
        }
        
        current = current.next;
        count++;
    }
    
    return newNode
}