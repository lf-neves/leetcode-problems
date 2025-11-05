function twoSum(nums: number[], target: number): number[] {
    const complementMap = {}

    for(let i =0;i<nums.length;i++){
        const complement = target - nums[i];

        if(complementMap[complement] !== undefined){
            return [complementMap[complement], i]
        }

        complementMap[nums[i]] = i
    }

    return []
};