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

function sumNumbers(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let totalSum = 0;
    let stack: [TreeNode, number][] = [[root, root.val]]

    while (stack.length) {
        const [currentNode, currentVal] = stack.pop()

        if(!currentNode.left && !currentNode.right){
            totalSum += currentVal;
        }

        if(currentNode.right){
            stack.push([currentNode.right, currentVal * 10 + currentNode.right.val])
        }
       
       if(currentNode.left){
            stack.push([currentNode.left, currentVal * 10 + currentNode.left.val])
        }
    }

    return totalSum;
};