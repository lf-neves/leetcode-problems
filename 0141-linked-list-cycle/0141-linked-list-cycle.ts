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
    if(head === null || head.next === null){
        return false;
    }
    
    const visitedNodes: ListNode[] = []
    let currentNode = head;

    while(!visitedNodes.includes(currentNode)){
        visitedNodes.push(currentNode)
        currentNode = currentNode?.next;

        if(currentNode === null){
            return false;
        }
    }

    return true;
};