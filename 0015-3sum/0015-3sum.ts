function threeSum(nums: number[]): number[][] {
    const sortedArr = nums.sort((a,b) => a - b)
    const result = []

    console.log("Sorted arr: ", sortedArr)

    for (let i = 0; i < sortedArr.length - 2; i++) {
        let start = i, end = sortedArr.length - 1
        let partialSum = sortedArr[start] + sortedArr[end]

        console.log(`Checking 2 ----> (${sortedArr[start]})+(${sortedArr[end]})`)

        // we only summed 2 numbers and it's already 0, so the third can't keep it as 0
        if (partialSum === 0) {
            continue;
        }

        let thirdElement;

        if (partialSum > 0) {
            thirdElement = sortedArr[start + 1]
        } else {
            thirdElement = sortedArr[end - 1]
        }

        console.log(`Checking 3----> (${sortedArr[start]})+(${sortedArr[end]})+(${thirdElement}) = ${partialSum + thirdElement}`)

        if(partialSum + thirdElement === 0){
            result.push([sortedArr[start], thirdElement, sortedArr[end]])
        }
    }

    console.log(result)

    return result;
}