function permute(nums: number[]): number[][] {
    const result = []
    const chunk = []

    const backtrack = (flags: number) => {
        if(chunk.length === nums.length){
            result.push(chunk.slice())
            
            return
        }

        for(let i=0;i<nums.length;i++){
            if((flags >> i) & 1){
                continue;
            }

            chunk.push(nums[i])

            backtrack(flags | (1 << i))

            chunk.pop()
        }
    }

    backtrack(0)

    return result;
};