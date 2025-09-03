/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeNodes(head: ListNode | null): ListNode | null {
    const anotherListHead = new ListNode(0);
    let anotherListTail = anotherListHead
    let sum = 0
    let currentNode = head.next;

    while(currentNode !== null){
        if(currentNode.val === 0){
            const newNode = new ListNode(sum)
            anotherListTail.next = newNode;
            sum = 0;
            anotherListTail = newNode;
        } else {
            sum += currentNode.val;
        }

        currentNode = currentNode.next;
    } 
      


    return anotherListHead.next;
};