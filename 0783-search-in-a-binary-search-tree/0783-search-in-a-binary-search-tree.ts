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



function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if(root.val === val){
        return root;
    }

    if(val > root.val && root.right){
        return searchBST(root.right, val)
    }

    if(val < root.val && root.left){
        return searchBST(root.left, val)
    }

    return null
};