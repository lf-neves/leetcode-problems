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



function bstToGst(root: TreeNode | null): TreeNode | null {
    let currentSum = 0
    
    const traverse = (node: TreeNode | null) => {
        if(!node){
            return;
        }

        traverse(node.right)
        currentSum += node.val
        node.val = currentSum
        traverse(node.left)
       
    }

    traverse(root)

    return root
};