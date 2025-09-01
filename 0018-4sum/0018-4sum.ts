function fourSum(nums: number[], target: number): number[][] {
    const sortedArr = nums.sort((a, b) => a - b)
    const n = sortedArr.length;
    const result = []

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && sortedArr[i] === sortedArr[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && sortedArr[j] === sortedArr[j - 1]) {
                continue;
            }

            let left = j + 1, right = n - 1;

            while (left < right) {
                const sum = sortedArr[i] + sortedArr[j] + sortedArr[left] + sortedArr[right]

                if (sum === target) {
                    result.push([sortedArr[i], sortedArr[j], sortedArr[left], sortedArr[right]])

                    // skip duplicates for left and right
                    while (left < right && sortedArr[left] === sortedArr[left + 1]) left++;
                    while (left < right && sortedArr[right] === sortedArr[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum > target) {
                    right--;
                } else {
                    left++;
                }
            }
        }
    }

    return result;
};