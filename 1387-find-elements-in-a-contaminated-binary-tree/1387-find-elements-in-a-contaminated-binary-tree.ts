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

class FindElements {
    nodeValues = []

    constructor(root: TreeNode | null) {
        if(!root){
            return null
        }

        root.val = 0;

        const bfs = (node: TreeNode) => {
            this.nodeValues.push(node.val)

            if(node.left){
                node.left.val = 2 * node.val + 1
                bfs(node.left)
            }

            if(node.right){
                node.right.val = 2 * node.val + 2
                bfs(node.right)
            }

        }

        bfs(root)
    }

    find(target: number): boolean {
        return this.nodeValues.includes(target);
    }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */