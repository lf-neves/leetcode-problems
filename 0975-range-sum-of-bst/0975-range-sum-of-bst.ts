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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    let sum = 0;

    const dfs = (node: TreeNode) => {
        if(node.val >= low && node.val <= high){
            sum += node.val
        }

        if(node.left){
            dfs(node.left)
        }

        if(node.right){
            dfs(node.right)
        }
    }

    dfs(root)

    return sum;
};