function canJump(nums: number[]): boolean {
    let goal = nums.length - 1

    for(let i=nums.length-1;i>=0;i--){
        const numberOfAvailableJumps = nums[i]

        if(i + numberOfAvailableJumps >= goal){
            goal = i;
        }
    }

    return goal === 0;
};