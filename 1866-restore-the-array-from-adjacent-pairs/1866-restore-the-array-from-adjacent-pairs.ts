function restoreArray(adjacentPairs: number[][]): number[] {
    const numbersMap: Record<number, number[]> = {}

    adjacentPairs.forEach(([firstNode, secondNode]) => {
        (numbersMap[firstNode] ??= []).push(secondNode);
        (numbersMap[secondNode] ??= []).push(firstNode);
    })

    const startNode = Number(Object.keys(numbersMap).find(key => numbersMap[key].length === 1))
    let currentNode = startNode
    let previousNode = null

    const result = [startNode]

    while (result.length < adjacentPairs.length + 1) {
        const neighbors = numbersMap[currentNode]
        const nextNode = neighbors.find(neighbor => neighbor !== previousNode)

        result.push(nextNode)
        previousNode = currentNode
        currentNode = nextNode
    }

    return result
};