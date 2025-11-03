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

function averageOfSubtree(root: TreeNode | null): number {
    let count = 0;
    let visitedNodes = 0;
    
    const dfs = (node: TreeNode | null, ) => {
        if(!node){
            return [0, 0];
        }

        const [leftSum, leftNumberOfNodes] = dfs(node.left)
        const [rightSum, rightNumberOfNodes] = dfs(node.right)
        const currentSum = leftSum + rightSum + node.val
        const currentNumberOfNodes = leftNumberOfNodes + rightNumberOfNodes + 1
        const currentAverage = Math.floor(currentSum/currentNumberOfNodes)

        if(currentAverage === node.val){
            count++;
        }

        return [currentSum, currentNumberOfNodes];
    }

    dfs(root)

    return count
};