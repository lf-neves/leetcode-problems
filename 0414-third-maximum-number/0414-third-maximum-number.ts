function thirdMax(nums: number[]): number {
    const descSortedNumsSet = new Set(nums.sort((a, b) => b-a));
    const descSortedNums = Array.from(descSortedNumsSet)

    if(descSortedNums.length < 3){
        return descSortedNums[0]
    }

    return descSortedNums[2]
};