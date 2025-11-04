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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    const depth = (node: TreeNode | null): number => {
        if (!node) return 0;

        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);

        // Update diameter (left depth + right depth is path going through this node)
        diameter = Math.max(diameter, leftDepth + rightDepth);

        // Return height of this node
        return Math.max(leftDepth, rightDepth) + 1;
    };

    depth(root);

    return diameter;
};