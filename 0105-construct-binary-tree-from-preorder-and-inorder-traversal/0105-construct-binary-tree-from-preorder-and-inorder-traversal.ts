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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if(!inorder.length){
        return null;
    }

    const rootVal = preorder.shift()
    const inOrderRootIndex = inorder.indexOf(rootVal)
    const inOrderLeftBranch = inorder.slice(0, inOrderRootIndex)
    const inOrderRightBranch = inorder.slice(inOrderRootIndex+1)

    const treeLeft = buildTree(preorder, inOrderLeftBranch)
    const treeRight = buildTree(preorder, inOrderRightBranch)
    const rootNode = new TreeNode(rootVal, treeLeft, treeRight)

    return rootNode;
};