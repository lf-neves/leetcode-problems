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

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
    if(!root){
        return null
    }

    const left = trimBST(root.left, low, high)
    const right = trimBST(root.right, low, high)

    if(root.val < low || root.val > high){
        return left ?? right
    }

    return new TreeNode(root.val, left, right)
};