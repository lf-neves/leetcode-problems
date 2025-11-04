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

function sumRootToLeaf(root: TreeNode | null): number {
    const sumSequence = []
    
    const dfs = (node: TreeNode | null, currentSequence: string) => {
        if(!node){
            return
        }

        if(!node?.right && !node?.left){
            sumSequence.push(currentSequence + node.val)

            return
        }

        dfs(node.left, currentSequence + node.val)
        dfs(node.right, currentSequence + node.val)

        return;
    }

    dfs(root, '')

    return sumSequence.reduce((total, current) => total + parseInt(current, 2), 0)
};