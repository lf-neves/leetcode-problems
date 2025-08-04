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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {

    if(head === null || left === right){
        return head;
    }

    let pseudoHead = new ListNode()
    pseudoHead.next = head;

    let previousNode = pseudoHead;
    let currentNode = head;
    let nextNode: ListNode;

    let count = 1;

    let joinFromLeft = null
    let joinToRight = null

    while (currentNode && count <= right){
        nextNode = currentNode.next;

        if(count === left){
            joinFromLeft = previousNode;
            joinToRight = currentNode;
        }

        if(count >= left){
            currentNode.next = previousNode;
        }

        previousNode = currentNode;
        currentNode = nextNode;
        count++;
    }
    
    joinFromLeft.next = previousNode;
    joinToRight.next = currentNode;

    return pseudoHead.next
};