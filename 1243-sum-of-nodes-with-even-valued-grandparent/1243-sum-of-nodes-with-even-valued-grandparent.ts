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

function sumEvenGrandparent(root: TreeNode | null): number {
    if (!root) {
        return 0
    }

    if (!root.left && !root.right) {
        return 0
    }

    const stack = [[null, root]]
    let sum = 0

    while (stack.length) {
        const [parentNode, node] = stack.pop()

        if (node.left) {
            if (parentNode && parentNode.val % 2 === 0) {
                sum += node.left.val;
            }

            stack.push([node, node.left])
        }

        if(node.right){
            if (parentNode && parentNode.val % 2 === 0) {
                sum += node.right.val;
            }

            stack.push([node, node.right])
        }
    }

    return sum;
};