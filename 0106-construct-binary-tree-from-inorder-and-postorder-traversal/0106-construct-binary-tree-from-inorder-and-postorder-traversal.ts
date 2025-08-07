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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if(!inorder.length){
        return null;
    }

    const rootVal = postorder.pop()
    const inOrderRootIndex = inorder.indexOf(rootVal)
    const root = new TreeNode(rootVal)

    const leftInorderSlice = inorder.slice(0, inOrderRootIndex)
    const rightInorderSlice = inorder.slice(inOrderRootIndex + 1)

    const leftPostOrderSlice = postorder.slice(0, leftInorderSlice.length)
    const rightPostOrderSlice = postorder.slice(leftInorderSlice.length)

    root.left = buildTree(leftInorderSlice, leftPostOrderSlice)
    root.right = buildTree(rightInorderSlice, rightPostOrderSlice)

    return root;
};