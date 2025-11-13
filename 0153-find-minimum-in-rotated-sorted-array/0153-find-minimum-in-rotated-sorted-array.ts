function findMin(nums: number[]): number {
    let start = 0, end = nums.length - 1

    while (start < end) {
        const mid = Math.floor((start + end) / 2)

        if (nums[mid] > nums[end]) {
            start = mid + 1
        } else {
            end = mid
        }
    }

    return nums[start];
};