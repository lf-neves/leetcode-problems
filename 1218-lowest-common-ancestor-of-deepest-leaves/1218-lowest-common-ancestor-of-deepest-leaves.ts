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

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {

    let maxDepth = 0;
    let parentNode = root;

    const dfs = (node: TreeNode | null, depth: number) => {

        if(node === null){
            return depth;
        }

        const leftDepth = dfs(node.left, depth + 1)
        const rightDepth = dfs(node.right, depth + 1)

        if(leftDepth === rightDepth && leftDepth > maxDepth){
            maxDepth = leftDepth - 1;
            parentNode = node;
        }

        return Math.max(leftDepth, rightDepth)
    }

    dfs(root, 0)

    return parentNode;
};