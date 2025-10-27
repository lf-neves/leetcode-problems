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

function maxAncestorDiff(root: TreeNode | null): number {
    if(root === null){
        return 0;
    }

    let result = 0

    const dfs = (node: TreeNode | null, min: number, max: number) => {
        if(!node){
            return;
        }

        result = Math.max(result, Math.max(Math.abs(min - node.val), Math.abs(max-node.val)))

        min = Math.min(min, node.val)
        max = Math.max(max, node.val)

        dfs(node.left, min, max)
        dfs(node.right, min, max)
    }

    dfs(root, root.val, root.val)

    return result;
};