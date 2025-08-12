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

function getMinimumDifference(root: TreeNode | null): number {
    if(!root){
        return 0;
    }

    const stack = [root]
    const nodeValues = [];

    while(stack.length){
        const node = stack.pop();
        nodeValues.push(node.val)

        if(node.left){
            stack.push(node.left);
        }

        if(node.right){
            stack.push(node.right);
        }
    }

    const sortedNodeValues = nodeValues.sort((a, b) => a - b)
    let minimumDifference = Infinity;

    for(let i=0;i<sortedNodeValues.length;i++){
        const currentDiff = Math.abs(sortedNodeValues[i+1] - sortedNodeValues[i]);

        if(i+1 < sortedNodeValues.length && currentDiff < minimumDifference){
            minimumDifference = currentDiff;
        }
    }

    return minimumDifference;
};