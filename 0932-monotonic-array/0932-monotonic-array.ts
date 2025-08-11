function isMonotonic(nums: number[]): boolean {
    const copy = new Array(...nums)
    const sortedArr = copy.sort((a, b) => a - b );

    if(nums.length === 1){
        return true
    }

    if(nums.toString() === sortedArr.toString()){
        return true;    
    }

    if(nums.toString() === sortedArr.reverse().toString()){
        return true;
    }

    return false;
};