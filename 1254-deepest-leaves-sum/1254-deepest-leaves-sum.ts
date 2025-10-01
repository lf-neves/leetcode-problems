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

function deepestLeavesSum(root: TreeNode | null): number {
    const sumOfNodesByLevel = []

    const dfs = (node: TreeNode, level: number) => {
        sumOfNodesByLevel[level] = (sumOfNodesByLevel[level] ?? 0) + node.val;

        if(node.right){
            dfs(node.right, level + 1)
        }

        if(node.left){
            dfs(node.left, level + 1)
        }
    }

    dfs(root, 0);

    return sumOfNodesByLevel.pop() || 0;
};