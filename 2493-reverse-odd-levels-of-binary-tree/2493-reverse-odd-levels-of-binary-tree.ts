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
    const reverse = (leftNode: TreeNode | null, rightNode: TreeNode | null, level: number) => {
        if(!leftNode || !rightNode){
            return null;
        }

        if (level % 2 !== 0) {
            const prov = leftNode.val;
            leftNode.val = rightNode.val;
            rightNode.val = prov;
        }

        reverse(leftNode.left, rightNode.right, level + 1)
        reverse(leftNode.right, rightNode.left, level + 1)
    }

    reverse(root.left, root.right, 1)

    return root
};