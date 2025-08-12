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

function kthSmallest(root: TreeNode | null, k: number): number {
    let smallestValue = Infinity;
    let i = 0;

    function inOrder(node: TreeNode){
        if(!node){
            return null;
        }

        if(node.left){
            inOrder(node.left)
        }

        i++;
        if(i === k){
            smallestValue = node.val
        }

        if(node.right){
            inOrder(node.right)
        }
        
    }

    inOrder(root)

    return smallestValue;
};