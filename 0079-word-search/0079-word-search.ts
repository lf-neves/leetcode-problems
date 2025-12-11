function exist(board: string[][], word: string): boolean {

    const backtrack = (i: number, j: number, strIndex: number) => {
        if (strIndex === word.length) {
            return true;
        }

        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
            return false;
        }

        if (board[i][j] !== word[strIndex]) {
            return false;
        }

        const currentLetter = board[i][j]
        board[i][j] = '#'

        const found =
            backtrack(i + 1, j, strIndex + 1) ||
            backtrack(i - 1, j, strIndex + 1) ||
            backtrack(i, j + 1, strIndex + 1) ||
            backtrack(i, j - 1, strIndex + 1)

        board[i][j] = currentLetter

        return found;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (backtrack(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};