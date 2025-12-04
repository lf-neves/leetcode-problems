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



function countNodes(root: TreeNode | null): number {
    if(root === null){
        return 0;
    }

    let count = 0

    const dfs = (node) => {
        count++
        
        if(node.left){
            dfs(node.left)
        }

        if(node.right){
            dfs(node.right)
        }
    }

    dfs(root)

    return count;
};