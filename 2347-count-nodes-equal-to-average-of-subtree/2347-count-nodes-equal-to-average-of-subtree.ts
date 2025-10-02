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
    
    const dfs = (node: TreeNode | null) => {
        if(node === null){
            return [0, 0]
        }

        if(node.left === null && node.right === null){
            count += 1;
            return [node.val, 1];
        }

        const [leftCurrentSum, leftNumNodes] = dfs(node.left)
        const [rightCurrentSum, rightNumNodes] = dfs(node.right)
        
        const sumAtRoot = leftCurrentSum + rightCurrentSum + node.val;
        const countAtRoot = leftNumNodes + rightNumNodes + 1;
        const subTreeAvg = Math.floor(sumAtRoot / countAtRoot)
        
        if(node.val === subTreeAvg){
            count++;
        }

        return [sumAtRoot, countAtRoot]

    }

    dfs(root)

    return count; 
};