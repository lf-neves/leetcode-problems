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


function maxDepth(root: _Node | null): number {
    let maxLevel = 0;
    
    const dfs = (node: _Node | null, currentLevel: number) => {
        if(!node ){
            return;
        }

        if(currentLevel > maxLevel){
            maxLevel = currentLevel;
        }

        const nextLevel = currentLevel + 1

        node.children.forEach(child => dfs(child, nextLevel))
    }

    dfs(root, 1)

    return maxLevel;
};