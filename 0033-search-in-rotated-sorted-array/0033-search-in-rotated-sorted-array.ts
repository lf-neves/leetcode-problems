function search(nums: number[], target: number): number {
    let left = 0, right = nums.length -1

    while(left <= right){
        const middle = Math.floor((right - left)/2)

        if(nums[middle] === target){
            return middle;
        }

        if(target < nums[right]){
            left = middle + 1
            continue;
        }

        if(target > nums[left]){
            right = middle - 1
            continue;
        }
    }

    return -1;
};