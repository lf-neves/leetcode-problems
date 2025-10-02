/**
 * Definition for node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: _Node | null): number[] {
    const nodes = []

    const postOrderTraversal = (node: _Node | null) => {
        if(node === null){
            return null;
        }

        node.children.forEach(childNode => {
            postOrderTraversal(childNode)
        })

        nodes.push(node.val)
    }
    
    postOrderTraversal(root)

    return nodes;
};