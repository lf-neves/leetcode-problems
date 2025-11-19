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
    if (!head || !head.next) {
        return false
    }

    let slowPointer = head, fastPointer = head;

    while (fastPointer !== null) {
        fastPointer = fastPointer?.next?.next ?? null;
        slowPointer = slowPointer?.next ?? null

        if (fastPointer === slowPointer) {
            return true
        }
    }

    return false;
};