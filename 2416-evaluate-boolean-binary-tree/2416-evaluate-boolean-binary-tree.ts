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

function evaluateTree(root: TreeNode | null): boolean {
    const dfs = (node) => {
        if(node.left === null && node.right === null){
            return node.val;
        }

        const leftResult = dfs(node.left)
        const rightResult = dfs(node.right)

        if(node.val === 2){
            return leftResult + rightResult;
        }

        if(node.val === 3){
            return leftResult * rightResult;
        }

        return node.val;      
    }

    return dfs(root)
};