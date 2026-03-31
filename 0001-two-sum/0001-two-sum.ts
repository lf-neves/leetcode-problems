function twoSum(nums: number[], target: number): number[] {
    const hashMap = {}
    
    for(let i=0;i<nums.length;i++){
        const targetDifference = target - nums[i]

        if(hashMap[targetDifference] !== undefined){
           return [hashMap[targetDifference], i] 
        }

        hashMap[nums[i]] = i
    }

    return []
};