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

function maxDepthNode(node: TreeNode, currentDepth: number): number {
    if (!node) {
        return currentDepth
    }

    return Math.max(maxDepthNode(node.left, currentDepth + 1), maxDepthNode(node.right, currentDepth + 1))
}

function maxDepth(root: TreeNode | null): number {
    return maxDepthNode(root, 0);
};