function numEnclaves(grid: number[][]): number {
    const rows = grid.length
    const columns = grid[0].length

    const removeBoundaryLands = (x, y) => {
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === 0) {
            return;
        }

        grid[x][y] = 0

        removeBoundaryLands(x + 1, y)
        removeBoundaryLands(x - 1, y)
        removeBoundaryLands(x, y + 1)
        removeBoundaryLands(x, y - 1)
    }

    for (let i = 0; i < rows; i++) {
        removeBoundaryLands(i, 0)
        removeBoundaryLands(i, columns - 1)
    }

    for (let i = 0; i < columns; i++) {
        removeBoundaryLands(0, i)
        removeBoundaryLands(rows - 1, i)
    }

    let count = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (grid[i][j] === 1) {
                count++
            }
        }
    }

    return count;
};