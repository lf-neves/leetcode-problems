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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }

    const stack: [TreeNode, number][] = [[root, 0]];
    const levelsMap = new Map<number, number[]>()

    while (stack.length) {
        const [node, level] = stack.pop()
        const currentLevelNodeValues = levelsMap.get(level) ?? []
        levelsMap.set(level, [...currentLevelNodeValues, node.val])

        if (node.right) {
            stack.push([node.right, level + 1])
        }

        if (node.left) {
            stack.push([node.left, level + 1])
        }

    }

    levelsMap.forEach((level, key) => {
        if(key % 2 !== 0){
            levelsMap.set(key, level.reverse())
        }
    })

    return Array.from(levelsMap.values())
};