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

function averageOfLevels(root: TreeNode | null): number[] {
    if(!root){
        return [];
    }
    
    const stack: [TreeNode, number][] = [[root, 0]]
    const levelValuesMap = new Map<number, number[]>()

    while(stack.length){
        const [node, level] = stack.pop()      
        const levelValues = levelValuesMap.get(level) ?? []
        levelValuesMap.set(level, [...levelValues, node.val])

        if(node.left){
            stack.push([node.left, level + 1])
        }

        if(node.right){
            stack.push([node.right, level + 1])
        }
    }

    const levelsArr = Array.from(levelValuesMap.values())

    return levelsArr.map(level => level.reduce((acc, total) => acc + total, 0)/level.length)
};