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
    let pseudoHead = new ListNode(-1, head)
    let slowPointer = pseudoHead, fastPointer = pseudoHead

    for(let i=0;i<n;i++){
        fastPointer = fastPointer?.next
    }

    while(fastPointer && fastPointer.next !== null){
        fastPointer = fastPointer.next
        slowPointer = slowPointer.next
    }

    slowPointer.next = slowPointer.next.next;

    return pseudoHead.next
};