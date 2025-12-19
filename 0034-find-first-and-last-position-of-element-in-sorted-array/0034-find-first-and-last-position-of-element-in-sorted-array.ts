function searchRange(nums: number[], target: number): number[] {
    let start = 0, end = nums.length -1

    while(start <= end){
        const middle = Math.floor((start + end)/2)

        if(nums[middle] === target){
            let currentIndex = middle
            while(nums[currentIndex] === target){
                currentIndex--
            }

            const targetStartIndex = currentIndex + 1
            currentIndex = middle
            
            while(nums[currentIndex] === target){
                currentIndex++
            }

            const targetEndIndex = currentIndex - 1;

            return [targetStartIndex, targetEndIndex]
        }

        if(nums[middle] > target){
            end = middle - 1
        }

        if(nums[middle] < target){
            start = middle + 1
        }
    }

    return [-1, -1]
};