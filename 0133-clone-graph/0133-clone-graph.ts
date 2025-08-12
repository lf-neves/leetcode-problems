/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
	if(node === null){
        return null;
    }

    const copiedNodesMap = new Map<number, _Node>()

    const dfs = (currentNode: _Node) => {
        if(copiedNodesMap.has(currentNode.val)){
            return copiedNodesMap.get(currentNode.val);
        }

        const copy = new _Node(currentNode.val)
        copiedNodesMap.set(currentNode.val, copy)
        
        copy.neighbors.push(...currentNode.neighbors.map(neighbor => dfs(neighbor)))

        return copy;
    }

    return dfs(node);
};