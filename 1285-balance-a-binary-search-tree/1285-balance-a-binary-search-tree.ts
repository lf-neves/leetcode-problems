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

function balanceBST(root: TreeNode | null): TreeNode | null {
    const values: number[] = []

    const inorder = (node: TreeNode | null) => {
        if (!node) { 
            return
        }

        inorder(node.left)
        values.push(node.val)
        inorder(node.right)
    }

    inorder(root)

    const sortedToBST = (left: number, right: number): TreeNode | null => {
       if(left > right){
        return null
       }

       const midIndex = Math.floor((left + right)/2)
       const node = new TreeNode(values[midIndex])
       node.left = sortedToBST(left, midIndex - 1)
       node.right = sortedToBST(midIndex + 1, right)

       return node
    }

    return sortedToBST(0, values.length - 1);
};