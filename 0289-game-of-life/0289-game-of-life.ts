/**
 Do not return anything, modify board in-place instead.
 */

function getNeighborsStats(x: number, y: number, board: number[][]) {
    let liveNeighbors = 0;
    let deadNeighbors = 0;

    for(let i = x-1;i<=x+1;i++){
        if(i < 0 || i >= board.length){
            continue;
        }

        for(let j=y-1;j<=y+1;j++){
            // console.log('i: ', i, 'j: ', j)
            if(j < 0 || j >= board[0].length){
                continue;
            }

            // dont count the current as a neighbor
            if(i === x && j === y){
                continue;
            }

            if(board[i][j] === 0){
                deadNeighbors++;
            }else {
                liveNeighbors++;
            }
        }
    }

    return { liveNeighbors, deadNeighbors }
}


function gameOfLife(board: number[][]): void {
    const deadCells = [];
    const liveCells = [];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const { liveNeighbors: numberOfLiveNeighbors, deadNeighbors: numberOfDeadNeighbors } = getNeighborsStats(i, j, board);

            if (board[i][j] === 1 && numberOfLiveNeighbors < 2) {
                deadCells.push([i, j])
            } else if (board[i][j] === 1 && (numberOfLiveNeighbors === 2 || numberOfLiveNeighbors === 3)) {
                liveCells.push([i, j])
            } else if (board[i][j] === 1 && numberOfLiveNeighbors > 3) {
                deadCells.push([i, j])
            } else if (board[i][j] === 0 && numberOfLiveNeighbors === 3) {
                liveCells.push([i, j])
            }
        }
    }

    while (liveCells.length > 0) {
        const currentCell = liveCells.pop();
        board[currentCell[0]][currentCell[1]] = 1;
    }

    while (deadCells.length > 0) {
        const currentCell = deadCells.pop();
        board[currentCell[0]][currentCell[1]] = 0;
    }
};