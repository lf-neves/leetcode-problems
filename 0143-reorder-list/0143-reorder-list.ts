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
    let middleNode = head;
    let fastNode = head;

    while(fastNode && fastNode.next){
        middleNode = middleNode.next;
        fastNode = fastNode.next.next;
    }

    let currentNode = middleNode.next;
    middleNode.next = null;
    const nodeStack = []

    while(currentNode !== null){
        nodeStack.push(currentNode)
        currentNode = currentNode.next;
    }

    currentNode = head;

    while(nodeStack.length){
        const prov = currentNode.next;
        const stackedNode = nodeStack.pop()
        currentNode.next = stackedNode
        currentNode.next.next = prov;
        currentNode = prov
    }
};