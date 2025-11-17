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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) {
        return list2
    }

    if (list2 === null) {
        return list1
    }


   if (list2.val < list1.val) {
        // swap so list1 is always the smaller head
        const temp = list1;
        list1 = list2;
        list2 = temp;
    }

    let current1 = list1, current2 = list2

    while (current1 && current2) {
        if (current1.next === null || current2.val <= current1.next?.val) {
            const prov = current2.next
            current2.next = current1.next
            current1.next = current2;
            current2 = prov
        } else {
            current1 = current1.next
        }
    }

    return list1
};