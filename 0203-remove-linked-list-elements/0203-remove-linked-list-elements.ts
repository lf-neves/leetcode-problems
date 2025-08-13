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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    let curr = head;
    const pseudoHead = new ListNode()
    pseudoHead.next = curr;

    let prev = pseudoHead;

    while(curr !== null){
        console.log(curr.val)

        if(curr.val === val){
            prev.next = curr.next;       
        } else {
            prev = curr;
        }

        curr = curr.next;
    }

    return pseudoHead.next;
};