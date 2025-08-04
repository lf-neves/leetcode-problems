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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const mergedListHead = new ListNode(0)
    let currentPointer = mergedListHead;
    let addNum = 0;
    
    while (l1 !== null || l2 !== null || addNum) {
        let firstNum = 0;
        let secondNum = 0;

        if(l1){
            firstNum = l1.val;
        }

        if(l2){
            secondNum = l2.val
        }

        let result = firstNum + secondNum + addNum;
        addNum = 0;

        if(result >= 10){
            addNum += 1;
            result -= 10;
        }
        
        currentPointer.val = result;

        if(l1?.next || l2?.next || addNum){
            currentPointer.next = new ListNode()
            currentPointer = currentPointer.next; 
        }

        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;

    }

    return mergedListHead
};