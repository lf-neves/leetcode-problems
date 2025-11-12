function search(nums: number[], target: number): number {
    let i = 0, j = nums.length - 1

    while (i <= j) {
        const k = Math.floor((i + j) / 2)

        console.log(i, j, k)

        if(nums[k] === target){
            return k;
        }

        if(nums[k] < target){
            i = k + 1
        } else {
            j = k - 1
        }
    }

    return -1
};