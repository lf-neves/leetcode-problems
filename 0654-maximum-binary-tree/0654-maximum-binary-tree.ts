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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
     if (!nums.length) {
        return null;
    }

    const maxNumIndex = nums.indexOf(Math.max(...nums));
    const left = nums.slice(0, maxNumIndex);
    const right = nums.slice(maxNumIndex + 1);

    return {
        val: nums[maxNumIndex],
        left: constructMaximumBinaryTree(left),
        right: constructMaximumBinaryTree(right),
    };
};