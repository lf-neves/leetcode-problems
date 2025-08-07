function jump(nums: number[]): number {
    let currentEnd = 0
    let numberOfJumps = 0
    let farthest = 0

    for(let i=0;i<nums.length-1;i++){
        farthest = Math.max(farthest, i + nums[i])

        if(i === currentEnd){
            numberOfJumps++;
            currentEnd = farthest
        }
    }

    return numberOfJumps;
};