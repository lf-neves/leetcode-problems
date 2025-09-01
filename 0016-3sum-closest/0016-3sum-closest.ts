function threeSumClosest(nums: number[], target: number): number {
    if (nums.length === 3) {
        return nums.reduce((curr, total) => curr + total, 0)
    }


    const sortedNums = nums.sort((a, b) => a - b)
    let closestSum = nums[0] + nums[1] + nums[2]

    for (let i = 0; i < sortedNums.length; i++) {
        let left = i+1, right = sortedNums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right]

            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            } else if (currentSum < target) {
                left += 1;
            } else if (currentSum > target){
                right -= 1;
            } else {
                return currentSum;
            }
        }
    }

    return closestSum; 
};