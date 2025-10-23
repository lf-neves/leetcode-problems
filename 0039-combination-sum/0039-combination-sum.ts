function combinationSum(candidates: number[], target: number): number[][] {
    const results = []
    
    const dfs = (index: number, currentSequence: number[], target: number) => {
        if(target === 0){
            results.push(currentSequence.slice())
            
            return;
        }

        for(let i=index; i < candidates.length; i++){
            if(candidates[i] > target){
                continue;
            }

            currentSequence.push(candidates[i])

            dfs(i, currentSequence, target - candidates[i])
            currentSequence.pop()
        }
    }

    dfs(0, [], target)

    return results
};