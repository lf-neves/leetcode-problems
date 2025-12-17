function maxSubarraySumCircular(nums: number[]): number {
    let total = 0;
    let minSum = Infinity, currMin = 0;
    let maxSum = -Infinity, currMax = 0;

    for (const num of nums) {
        total += num

        currMax = Math.max(num, currMax + num)
        maxSum = Math.max(maxSum, currMax)

        currMin = Math.min(num, currMin + num)
        minSum = Math.min(minSum, currMin)
    }

    return maxSum < 0 ? maxSum : Math.max(maxSum, total - minSum)
};