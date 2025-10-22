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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if(!root){
        return new TreeNode(val);
    }

    let currentNode = root;
    while (currentNode){
        if(val > currentNode.val){
            if(!currentNode.right){
                currentNode.right = new TreeNode(val)

                return root;
            }

            currentNode = currentNode.right;
        } else {
            if(!currentNode.left){
                currentNode.left = new TreeNode(val)

                return root;
            }

            currentNode = currentNode.left;
        }
    }

    
};