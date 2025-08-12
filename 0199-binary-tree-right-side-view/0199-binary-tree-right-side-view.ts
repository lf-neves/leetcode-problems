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

function rightSideView(root: TreeNode | null): number[] {
    if(!root){
        return [];
    } 

    const stack: [TreeNode, number][] = [[root, 0]]
    const levelMap = new Map<number, number>()

    while(stack.length){
        const [node, level] = stack.pop()

        levelMap.set(level, node.val)

        
        if(node.right){
            stack.push([node.right, level+1])
        }

        if(node.left){
            stack.push([node.left, level + 1])
        }

    }

    return Array.from(levelMap.values())
};