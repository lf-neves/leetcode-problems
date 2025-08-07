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

 function findSmallest(node) {
    while (node.left) {
        node = node.left
    }
    return node
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {

    if(!root) {
        return null;
    }

    if(root.val < key){
        root.right = deleteNode(root.right, key)
    }

    if(root.val > key){
        root.left = deleteNode(root.left, key)
    }

    if(root.val === key){
        if(!root.left && !root.right){
            return null;
        }

        if(!root.left){
            return root.right;
        }

        if(!root.right){
            return root.left;
        }

        const minRightSideNode = findSmallest(root.right)
        minRightSideNode.left = root.left;

        return root.right;
    }

    return root;
};