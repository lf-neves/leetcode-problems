function summaryRanges(nums: number[]): string[] {
    let start = 0;
    const sequences = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {
            if (start !== i) {
                sequences.push([start, i])
            } else {
                sequences.push([start])
            }

            start = i + 1;
        }
    }

    return sequences.map(([start, end]) => {
        return end ? `${nums[start]}->${nums[end]}` : `${nums[start]}`;
    })
};