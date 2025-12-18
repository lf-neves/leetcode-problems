function findPeakElement(nums: number[]): number {
    for(let i=0;i<nums.length;i++){
        const left = i == 0 ? -Infinity : nums[i-1]
        const right = i === nums.length -1 ? -Infinity : nums[i+1] 

        console.log(`left(${left}) num(${nums[i]}) right(${right})`)

        if(left < nums[i] && nums[i] > right){
            return i;
        }
    }
};