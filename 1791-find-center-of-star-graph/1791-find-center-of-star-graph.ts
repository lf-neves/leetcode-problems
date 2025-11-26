function findCenter(edges: number[][]): number {
    const connectionsMap: Record<string, number[]> = {}

    while (edges.length) {
        const [x, y] = edges.pop()

        if (connectionsMap[x]) {
            connectionsMap[x].push(y)
        } else {
            connectionsMap[x] = [y]
        }

        if (connectionsMap[y]) {
            connectionsMap[y].push(x)
        } else {
            connectionsMap[y] = [x]
        }
    }

    return Number(Object.entries(connectionsMap).sort((a, b) => {
        return b[1].length - a[1].length
    })[0][0])
};