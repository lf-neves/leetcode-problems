/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let limit = nums.length
    let currIndex = 0

    while(currIndex < limit){
        if(nums[currIndex] === 0){
            nums.splice(currIndex, 1)
            nums.push(0)
            limit--
        } else {
            currIndex++
        }
    }
};