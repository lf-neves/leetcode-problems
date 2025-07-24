function isValidSudoku(board: string[][]): boolean {
    const set = new Set()

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const ceil = board[i][j]

            if(ceil === '.'){
                continue;
            }

            const row = i+'row'+ceil
            const column = j+'column'+ceil
            const box = Math.floor(i/3)+'box'+Math.floor(j/3)+''+ceil

            if(set.has(row) || set.has(column) || set.has(box)){
                return false
            }

            set.add(row)
            set.add(column)
            set.add(box)
        }
    }

    return true;
};