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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if(!head || !head.next){
        return;
    }

    let preTail = head
    while(preTail.next?.next !== null){
        preTail = preTail.next;
    }

    const tail = preTail.next
    preTail.next = null

    const prov = head.next;
    head.next = tail
    tail.next = prov;

    reorderList(prov)
};