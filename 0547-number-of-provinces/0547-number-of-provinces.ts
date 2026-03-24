function findCircleNum(isConnected: number[][]): number {
    const n = isConnected.length
    const visited = new Array(n).fill(false)
    let provincesCount = 0

    const dfs = (current) => {
        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (!visited[neighbor] && isConnected[current][neighbor]) {
                visited[neighbor] = true
                dfs(neighbor)
            }
        }
    }


    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i)
            provincesCount++
        }
    }

    return provincesCount
};