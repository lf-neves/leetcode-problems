function missingNumber(nums: number[]): number {
    const n = nums.length;
    let mustBeSum = n;
    let sum = 0;

    for(let i=0;i<n;i++){
        mustBeSum += i;
        sum += nums[i]
    }

    return mustBeSum - sum;
};