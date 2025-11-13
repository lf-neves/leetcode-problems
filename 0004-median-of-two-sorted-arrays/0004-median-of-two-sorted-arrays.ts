function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const sortedArr = [...nums1, ...nums2].sort((a, b) => a - b)

    console.log(sortedArr)

    if(sortedArr.length % 2 !== 0){
        const mid = Math.floor(sortedArr.length/2)
        return sortedArr[mid]
    }

    return (sortedArr[(sortedArr.length/2)-1] + sortedArr[(sortedArr.length/2)])/2
};