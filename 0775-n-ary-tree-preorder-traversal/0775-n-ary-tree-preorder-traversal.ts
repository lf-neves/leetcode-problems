/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 * 
 *     constructor(val?: number, children?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */


function preorder(root: _Node | null): number[] {
    const result = []

    const dfs = (node: _Node | null) => {
        if(!node) {
            return;
        }

        console.log("Current node: ", node.val)
        
        result.push(node.val)
        node.children.forEach(childNode => dfs(childNode))

        return;
    }

    dfs(root)

    return result
};