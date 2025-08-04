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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if(head === null){
        return head;
    }

    let currentNode = head
    let listSize = 0

    while(currentNode){
        currentNode = currentNode.next;
        listSize++;
    }

    if(listSize - n === 0){
        return null;
    }

    let pseudoHead = new ListNode();
    pseudoHead.next = head;
    currentNode = head;

    for(let i=0;i<listSize-n-1;i++){
        currentNode = currentNode.next;
    }

    currentNode.next = currentNode.next?.next ?? null;

    return head;
};