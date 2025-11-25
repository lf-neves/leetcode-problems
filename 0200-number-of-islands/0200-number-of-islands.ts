function numIslands(grid: string[][]): number {
    const removeLand = (x: number, y: number) => {
        if(x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] !== '1'){
            return;
        }

        grid[x][y] = "0"

        removeLand(x, y+1)
        removeLand(x, y-1)
        removeLand(x+1, y)
        removeLand(x-1, y)
    }
    
    let numOfIslands = 0

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] === '1'){
                removeLand(i, j)
                numOfIslands++
            }
        }
    }

    return numOfIslands;
};