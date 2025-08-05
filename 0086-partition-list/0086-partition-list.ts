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

function partition(head: ListNode | null, x: number): ListNode | null {
    if(head === null || head.next === null){
        return head;
    }

    let beforeHead = new ListNode();
    let afterHead = new ListNode();
    
    let currentNode = head;
    let before = beforeHead;
    let after = afterHead;
    
    while(currentNode !== null){
        if(currentNode.val < x){
            before.next = currentNode;
            before = before.next;
        }else {
            after.next = currentNode;
            after = after.next;
        }

        currentNode = currentNode.next;
    }

    after.next = null
    before.next = afterHead.next;
    
    return beforeHead.next;
};