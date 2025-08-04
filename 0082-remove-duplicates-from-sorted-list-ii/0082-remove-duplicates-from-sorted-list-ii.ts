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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head;
    }

    const map = {}
    let currentNode = head;

    while (currentNode !== null) {
        if (!map[currentNode.val]) {
            map[currentNode.val] = 1
        } else {
            map[currentNode.val]++
        }

        currentNode = currentNode.next
    }

    let prev = null;
    currentNode = head

    while (currentNode !== null) {
        if (map[currentNode.val] > 1) {
            console.log('will delete: ', currentNode.val, Boolean(prev))

            if (prev) {
                prev.next = currentNode.next;
            } else {
                head = currentNode.next;
            }
        } else {
            prev = currentNode;
        }
        
        currentNode = currentNode.next;

    }

    return head;
};