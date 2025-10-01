/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumEvenGrandparent(root: TreeNode | null): number {
    const nodesQueue = [{node: root, parent: -1, gParent: -1}]
    let evenSum = 0;

    while(nodesQueue.length){
        const {node, parent, gParent} = nodesQueue.shift()

        if(gParent % 2 === 0){
            evenSum += node.val
        }

        if(node.left){
            nodesQueue.push({node: node.left, parent: node.val, gParent: parent})
        }

        if(node.right){
            nodesQueue.push({node: node.right, parent: node.val, gParent: parent})
        }
    }

    return evenSum;
};