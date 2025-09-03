function pivotArray(nums: number[], pivot: number): number[] {
    const beforePivot = []
    const afterPivot = []
    const middle = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > pivot) {
            afterPivot.push(nums[i])
        } else if (nums[i] < pivot) {
            beforePivot.push(nums[i])
        } else {
            middle.push(nums[i])
        }
    }

    return [...beforePivot, ...middle, ...afterPivot]
};