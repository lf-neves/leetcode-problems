function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
    const incomeEdgesByNodeMap: Record<number, number> = {}

    for (let i = 0; i < n; i++) {
        incomeEdgesByNodeMap[i] = 0
    }

    while (edges.length) {
        const [fromNode, toNode] = edges.pop()

        console.log(fromNode, toNode)

        incomeEdgesByNodeMap[toNode]++
    }


    return Object.entries(incomeEdgesByNodeMap).filter(([node, incomeEdges]) => incomeEdges === 0).map(([node]) => Number(node))
};