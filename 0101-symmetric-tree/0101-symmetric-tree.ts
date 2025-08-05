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

 function isMirror(a: TreeNode | null, b: TreeNode | null){
    if(a === null && b === null) {
        return true;
    }

    if(a === null || b === null){
        return false
    }

    return a.val === b.val && isMirror(a.left, b.right) && isMirror(a.right, b.left)
 }

function isSymmetric(root: TreeNode | null): boolean {
    return isMirror(root, root)
};