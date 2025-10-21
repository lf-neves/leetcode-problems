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

class BSTIterator {
    nodeStack: TreeNode[]

    constructor(root: TreeNode | null) {
        this.nodeStack = new Array()
        
        let currentNode = root
        while(currentNode){
            this.nodeStack.push(currentNode)
            currentNode = currentNode.left
        }
    }

    next(): number {
        const currentNode = this.nodeStack.pop()

        if(currentNode.right){
            let currentSubtree = currentNode.right
            while(currentSubtree){
                this.nodeStack.push(currentSubtree)
                currentSubtree = currentSubtree.left;
            }
        }

        return currentNode.val
    }

    hasNext(): boolean {
       return this.nodeStack.length > 0
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */