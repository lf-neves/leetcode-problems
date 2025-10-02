function allPathsSourceTarget(graph: number[][]): number[][] {
    const listOfPaths = []

    const dfs = (node: number, currPath: number[]) => {
        if(node === graph.length - 1){
            listOfPaths.push([...currPath, node])
            return;
        }

        const availablePathsFromNode = graph[node]

        availablePathsFromNode.forEach(path => {
            dfs(path, [...currPath, node])
        })
        
    }

    dfs(0, [])

    return listOfPaths;
};