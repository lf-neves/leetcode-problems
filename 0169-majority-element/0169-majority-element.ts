function majorityElement(nums: number[]): number {
    const majorityFactor = nums.length / 2
    const map = {}

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }

        if (map[nums[i]] > majorityFactor) {
            return nums[i]
        }
    }
};