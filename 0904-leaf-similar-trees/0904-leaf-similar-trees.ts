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


function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    let stack = [root1] 
    const leaves = []
    let node

    while(stack.length > 0){
        node = stack.pop()

        if(node.right !== null){
            stack.push(node.right)
        }

        if(node.left !== null){
            stack.push(node.left)
        }

        if(node.right === null && node.left === null){
            leaves.push(node.val)
        }
    }

    stack = [root2]

    while(stack.length > 0){
        node = stack.pop()

        if(node.right !== null){
            stack.push(node.right)
        }

        if(node.left !== null){
            stack.push(node.left)
        }

        if(node.right === null && node.left === null){
            if(node.val !== leaves[0]){
                return false 
            }else {
                leaves.shift()
            }
        }

    }

    return leaves.length === 0 

};