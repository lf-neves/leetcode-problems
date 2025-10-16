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

function bstFromPreorder(preorder: number[]): TreeNode | null {
    if(!preorder.length){
        return null;
    }

    const root = new TreeNode(preorder.shift())

    const placeNode = (node: TreeNode, root: TreeNode) => {
        if(node.val > root.val){
            if (!root.right) {
                root.right = node;
                return;
            }

            placeNode(node, root.right)
        }

        if(node.val < root.val){
            if (!root.left) {
                root.left = node;
                return;
            }

            placeNode(node, root.left)
        }
    }

    while(preorder.length){
        placeNode(new TreeNode(preorder.shift()), root)
    }

    return root;
};