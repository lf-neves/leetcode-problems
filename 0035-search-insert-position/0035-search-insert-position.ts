function searchInsert(nums: number[], target: number): number {
    const sorted = nums.sort((a, b) => a - b)

    for(let i=0;i<sorted.length;i++){
        if(sorted[i] >= target){
            return i;
        }
    }

    return sorted.length;
};