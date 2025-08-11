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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    if (!root) {
        return;
    }

    let stack = [root], prev = null;

    while (stack.length) {
        const current = stack.pop()

        if (prev) {
            prev.right = current;
            prev.left = null;
        }

        if (current.right) {
            stack.push(current.right)
        }

        if (current.left) {
            stack.push(current.left)
        }

        prev = current;
    }
};