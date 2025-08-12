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

function isValidBST(root: TreeNode | null): boolean {
    let isValid = true;
    let prev = -Infinity;

    function inOrder(node: TreeNode | null) {
        if (!node) {
            return null;
        }

        if (node.left) {
            inOrder(node.left)
        }

        if (prev >= node.val) {
            isValid = false;
        }

        prev = node.val;

        if (node.right) {
            inOrder(node.right)
        }
    }

    inOrder(root)

    return isValid;
};