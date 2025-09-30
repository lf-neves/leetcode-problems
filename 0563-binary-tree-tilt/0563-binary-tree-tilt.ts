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

function findTilt(root: TreeNode | null): number {
    let tiltSum = 0;


    const traverse = (node: TreeNode): number =>{
        if(!node){
            return 0;
        }

        const left = traverse(node.left)
        const right = traverse(node.right)
        tiltSum += Math.abs(left - right)

        return node.val + left + right
    }

    traverse(root);

    return tiltSum;
};