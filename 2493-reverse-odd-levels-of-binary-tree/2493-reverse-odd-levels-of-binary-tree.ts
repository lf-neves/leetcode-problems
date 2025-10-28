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

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    const reverseLevels = (rightNode: TreeNode | null, leftNode: TreeNode | null, level: number ) => {
        if(!rightNode || !leftNode){
            return;
        }

        if(level % 2 === 1){
            const temp = rightNode.val
            rightNode.val = leftNode.val
            leftNode.val = temp
        }

        reverseLevels(leftNode.left, rightNode.right, level + 1)
        reverseLevels(leftNode.right, rightNode.left, level + 1)
    }

    reverseLevels(root.left, root.right, 1)

    return root
};