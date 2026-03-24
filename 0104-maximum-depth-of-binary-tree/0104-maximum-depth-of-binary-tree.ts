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

function maxDepth(root: TreeNode | null): number {

    if (!root) {
        return 0
    }

    const treeStack: Array<[TreeNode, number]> = [[root, 1]]
    let maxDepth = 0

    while (treeStack.length) {
        const [currentNode, depth] = treeStack.pop()
        maxDepth = Math.max(maxDepth, depth)

        if (currentNode?.left) {
            treeStack.push([currentNode.left, depth + 1])
        }

        if (currentNode?.right) {
            treeStack.push([currentNode.right, depth + 1])
        }
    }

    return maxDepth;
};