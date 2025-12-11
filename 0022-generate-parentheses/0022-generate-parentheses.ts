function generateParenthesis(n: number): string[] {
    const result = []

    const backtrack = (open: number, close: number, combination: string) => {
        if (close === 0 && open === 0) {
            result.push(combination.slice())
            return;
        }

        if (open > 0) {
            backtrack(open - 1, close, combination + '(')
        } 
        
        if (close > open){
            backtrack(open, close - 1, combination + ')')
        }

        return;
    }

    backtrack(n, n, '')

    return result;
};