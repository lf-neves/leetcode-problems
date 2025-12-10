function letterCombinations(digits: string): string[] {
    const digitsByNumberMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }

    const result = []

    const backtrack = (combination: string, nextDigits: string) => {
        if(!nextDigits.length){
            result.push(combination)
            return;
        }

        for(const letter of digitsByNumberMap[nextDigits[0]]){
            backtrack(combination+letter, nextDigits.slice(1))
        }

        return;
    }

    backtrack("", digits)

    return result
};