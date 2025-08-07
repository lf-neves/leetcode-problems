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

function reverseList(head: ListNode | null): ListNode | null {
    if(!head){
        return head
    }

    let current = head
    let previousNode = null
    let nextNode = head.next

    while(current !== null){
        current.next = previousNode
        previousNode = current
        current = nextNode
        nextNode = current?.next
    }

    return previousNode
};