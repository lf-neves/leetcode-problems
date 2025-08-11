function containsDuplicate(nums: number[]): boolean {
    if(!nums.length){
        return false;
    }

    const map:Record<number, number> = {}

    for(let i=0; i< nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]]++;
        }else {
            map[nums[i]] = 1;
        }
    }

    return Object.values(map).some(val => val > 1);
};