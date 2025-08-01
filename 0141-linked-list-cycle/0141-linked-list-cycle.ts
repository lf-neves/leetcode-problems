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

function hasCycle(head: ListNode | null): boolean {
    if(head === null || head.next === null){
        return false;
    }
    
    let fastPointer = head;
    let slowPointer = head;

    while(fastPointer && fastPointer.next){
        fastPointer = fastPointer.next?.next;
        slowPointer = slowPointer.next;

        if(fastPointer === slowPointer){
            return true
        }
    }

    return false;
};