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

function isUnivalTree(root: TreeNode | null): boolean {
    if(!root){
        return false;
    }

    const uniVal = root.val;
    const stack = [root]

    while(stack.length){
        const curr = stack.pop()

        if(curr.val !== uniVal){
            return false;
        }

        if(curr.left){
            stack.push(curr.left)
        }

        if(curr.right){
            stack.push(curr.right)
        }
    }

    return true;
};