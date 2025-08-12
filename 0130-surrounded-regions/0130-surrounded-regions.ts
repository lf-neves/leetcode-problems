/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const rowsSize = board.length;
    const columnsSize = board[0].length;

    const dfs = (x, y) => {
        if(x < 0 || y < 0 || x >= rowsSize || y >= columnsSize || board[x][y] !== 'O' ){
            return;
        }

        board[x][y] = 'T'

        dfs(x, y + 1);
        dfs(x, y - 1);
        dfs(x + 1, y)
        dfs(x - 1, y)

    }

    // transverse the borders of the board to find non surrounded nodes
    for(let i=0;i<rowsSize;i++){
        if(board[i][0] === 'O'){
            dfs(i, 0);
        }

        if(board[i][columnsSize-1] === 'O'){
            dfs(i, columnsSize-1);
        }
    }

    for(let j=0;j<columnsSize;j++){
        if(board[0][j] === 'O'){
            dfs(0, j);
        }

        if(board[rowsSize-1][j] === 'O'){
            dfs(rowsSize-1, j);
        }
    }

    for(let i=0;i<rowsSize;i++){
        for(let j=0;j<columnsSize;j++){
            if(board[i][j] === 'O'){
                board[i][j] = 'X'
            }else if(board[i][j] === 'T'){
                board[i][j] = 'O'
            }
        }
    }
};