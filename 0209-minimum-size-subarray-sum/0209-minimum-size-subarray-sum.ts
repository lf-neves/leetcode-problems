function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0;
    let total = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        total += nums[right];

        while (total >= target) {
            minLength = Math.min(minLength, right - left + 1);
            total -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}
