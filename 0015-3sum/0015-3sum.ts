function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const op: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        const target = -nums[i];
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            const current_sum = nums[left] + nums[right];
            if (current_sum === target) {
                op.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (current_sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return op;
}