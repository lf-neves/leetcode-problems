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

function increasingBST(root: TreeNode | null): TreeNode | null {
    const dummyHead = new TreeNode()
    let temp = dummyHead

    const traverse = (node: TreeNode | null) => {
        if (!node) {
            return
        }

        if (node.left) {
            traverse(node.left)
        }

        temp.right = new TreeNode(node.val)
        temp = temp.right

        if (node.right) {
            traverse(node.right)
        }
    }

    traverse(root)

    return dummyHead.right
};