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

function distributeCoins(root: TreeNode | null): number {
    let count = 0;

    const dfs = ( node: TreeNode | null) => {
        if (!node) {
            return 0;
        }

        const leftExcess = dfs(node.left)
        const rightExcess = dfs(node.right)

        count += Math.abs(leftExcess) + Math.abs(rightExcess)

        return node.val + leftExcess + rightExcess - 1
    }

    dfs(root)

    return count
};