function removeDuplicates(nums: number[]): number {
    let i = 0;
    let prev = null;
    let beforePrev = null

    while (i !== nums.length) {
        if (prev === beforePrev && prev === nums[i]) {
            nums.splice(i, 1)
        } else {
            beforePrev = prev
            prev = nums[i]
            i++
        }
    }

    return nums.length
};