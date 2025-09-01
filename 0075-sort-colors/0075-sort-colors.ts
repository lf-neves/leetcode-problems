/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    const colorMap = [0, 0, 0]

    for(let i=0;i<nums.length;i++){
        colorMap[nums[i]]++;
    }

    let start = 0;
    for (let i = 0; i < 3; i++) {
        const count = colorMap[i];
        const arr = new Array(count).fill(i);
        nums.splice(start, count, ...arr);
        start += colorMap[i];
    }
};