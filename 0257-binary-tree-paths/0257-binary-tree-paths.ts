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

function binaryTreePaths(root: TreeNode | null): string[] {
    const result = []
    const stack: Array<[TreeNode, string ]> = [[root, `${root.val}`]]

    while(stack.length){
        const [currNode, currPath] = stack.pop()

        if(!currNode.right && !currNode.left){
            result.push(currPath)
        }

        if(currNode.right){
            stack.push([currNode.right, `${currPath}->${currNode.right.val}`])
        }

        if(currNode.left){
            stack.push([currNode.left, `${currPath}->${currNode.left.val}`])
        }
    }

    return result; 
};