function removeDuplicates(nums: number[]): number {
    const map = {}

    for(let i=0;i<nums.length;i++){
        if(map[nums[i]]){
            nums.splice(i, 1)
            i--;
        } else {
            map[nums[i]] = 1
        }
    }

    return nums.length
};