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

function postorderTraversal(root: TreeNode | null): number[] {
    const postorderNodes = []

    const dfs = (node: TreeNode | null) => {
        if(!node){
            return
        }


        dfs(node.left)
        dfs(node.right)
        postorderNodes.push(node.val)
    }

    dfs(root)

    return postorderNodes
};