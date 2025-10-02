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

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
    const sumOfNodesByLevel = {}

    const dfs = (node: TreeNode, level: number) => {
        sumOfNodesByLevel[level] = (sumOfNodesByLevel[level] ?? 0) + node.val;

        if(node.left){
            dfs(node.left, level + 1)
        }

        if(node.right){
            dfs(node.right, level + 1)
        }
    }

    dfs(root, 0)

    const replaceValuesDfs = (node: TreeNode | null, siblingVal: number, depth: number) => {
        if (!node) return;

        const leftVal = node.left?.val ?? 0;
        const rightVal = node.right?.val ?? 0;

        if (depth === 0) {
            node.val = 0; // root case
        } else {
            node.val = sumOfNodesByLevel[depth] - (siblingVal + node.val);
        }

        replaceValuesDfs(node.left, rightVal, depth + 1);
        replaceValuesDfs(node.right, leftVal, depth + 1);
    };

    replaceValuesDfs(root, 0, 0)

    return root;

};