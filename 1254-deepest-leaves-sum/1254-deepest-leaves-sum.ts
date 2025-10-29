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

function deepestLeavesSum(root: TreeNode | null): number {
    const leafsWithLevel = []

    const dfs = (node: TreeNode | null, level: number) => {
        if (!node) {
            return
        }

        if (!node.left && !node.right) {
            leafsWithLevel.push([node.val, level])
        }

        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }

    dfs(root, 0)


    leafsWithLevel.sort(([valueA, levelA], [valueB, levelB]) => levelA - levelB)
    const deepestLevel = leafsWithLevel[leafsWithLevel.length - 1][1]
    const deepestLevelLeafsValues = leafsWithLevel.map(([value, level]) => level === deepestLevel ? value : 0 )

    return deepestLevelLeafsValues.reduce((curr, total) => curr + total, 0)
};