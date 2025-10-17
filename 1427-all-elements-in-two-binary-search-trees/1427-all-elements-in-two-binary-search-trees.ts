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


function inOrder(root, elements){
    if(!root){
        return;
    }

    if(root.left){
        inOrder(root.left, elements)
    }

    elements.push(root.val)

    if(root.right){
        inOrder(root.right, elements)
    }

}

function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
    const res = []

    inOrder(root1, res)
    inOrder(root2, res)

    return res.sort((a, b) => a-b)
};

