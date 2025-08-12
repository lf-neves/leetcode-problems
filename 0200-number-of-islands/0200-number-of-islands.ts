function numIslands(grid: string[][]): number {
    const removeLand = (x: number, y: number) => {
        if (x < 0 || y < 0 || x >= grid[0].length || y >= grid.length || grid[y][x] !== '1') {
            return;
        }

        grid[y][x] = '0';

        removeLand(x - 1, y);
        removeLand(x + 1, y);
        removeLand(x, y - 1);
        removeLand(x, y + 1);
    }


    let numberOfIslands = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '1' ) {
                removeLand(col, row)
                numberOfIslands++;
            }
        }
    }

    return numberOfIslands;
};