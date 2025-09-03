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

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    const gcd = (a: number, b: number) => {
        if (b === 0) {
            return a;
        } else {
            return gcd(b, a % b);
        }
    }

    let currentNode = head;
    while (currentNode.next !== null) {
        const newNode = new ListNode(gcd(currentNode.val, currentNode.next.val), currentNode.next);
        currentNode.next = newNode;
        currentNode = newNode.next;
    }

    return head;
};