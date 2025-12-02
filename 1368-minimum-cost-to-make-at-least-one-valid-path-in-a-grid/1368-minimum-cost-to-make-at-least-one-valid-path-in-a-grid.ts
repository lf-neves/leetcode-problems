function minCost(grid: number[][]): number {
    const m = grid.length
    const n = grid[0].length

    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]

    const distanceMtx = Array.from({ length: m }, () => Array(n).fill(Infinity));
    distanceMtx[0][0] = 0

    const nodesToVisitQueue = [[0, 0]]

    while (nodesToVisitQueue.length) {
        const [x, y] = nodesToVisitQueue.shift()

        directions.forEach((currentDirection, directionIndex) => {
            const newX = currentDirection[0] + x
            const newY = currentDirection[1] + y

            if (newX < 0 || newY < 0 || newX >= m || newY >= n) {
                return;
            }

            // check if the currentCell guides us towards the next direction
            const cost = grid[x][y] === directionIndex + 1 ? 0 : 1

            if (distanceMtx[x][y] + cost < distanceMtx[newX][newY]) {
                distanceMtx[newX][newY] = distanceMtx[x][y] + cost

                if (cost === 0) {
                    nodesToVisitQueue.unshift([newX, newY])
                } else {
                    nodesToVisitQueue.push([newX, newY])
                }
            }
        })
    }

    return distanceMtx[m - 1][n - 1]

};