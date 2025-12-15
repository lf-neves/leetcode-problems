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

function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    let prev = null
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next?.next
    }

    const right = slow
    prev.next = null

    let currentSortedLeft = sortList(head)
    let currentSortedRight = sortList(right)

    const pseudoHead = new ListNode()
    let currentNode = pseudoHead;

    while (currentSortedLeft && currentSortedRight) {
        if (currentSortedLeft.val > currentSortedRight.val) {
            currentNode.next = currentSortedRight
            currentSortedRight = currentSortedRight.next;
        } else {
            currentNode.next = currentSortedLeft
            currentSortedLeft = currentSortedLeft.next;
        }

        currentNode = currentNode.next;
    }

    if (currentSortedLeft) {
        currentNode.next = currentSortedLeft
    }

    if (currentSortedRight) {
        currentNode.next = currentSortedRight
    }

    return pseudoHead.next;
};