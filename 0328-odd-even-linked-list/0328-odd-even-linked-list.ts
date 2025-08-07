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

function isOdd(value: number): boolean {
    return value % 2 !== 0
}

function oddEvenList(head: ListNode | null): ListNode | null {

    if(head === null || head.next === null){
        return head
    }

    let evenHead = head?.next
    let currentOdd = head
    let currentEven = evenHead

    while (currentEven !== null && currentEven?.next !== null) {
        currentOdd.next = currentOdd?.next?.next
        currentEven.next = currentEven?.next?.next

        currentOdd = currentOdd?.next
        currentEven = currentEven?.next
    }

    currentOdd.next = evenHead

    return head
};