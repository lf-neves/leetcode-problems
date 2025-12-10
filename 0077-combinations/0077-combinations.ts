function combine(n: number, k: number): number[][] {
    const result = []
    
    const backtrack = (currentCombination: number[], startIndex: number) => {
        if(currentCombination.length === k){
            result.push(currentCombination.slice())
            return;
        }

        for(let i=startIndex;i<=n;i++){
            backtrack([...currentCombination, i], i + 1)
        }

        return;
    }

    backtrack([], 1)

    return result;
    
};