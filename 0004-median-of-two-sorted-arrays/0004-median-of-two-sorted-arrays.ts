function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    nums1.push(...nums2);
    const sortedArr = nums1.sort((a, b) => a-b)

    console.log(sortedArr)

    if(sortedArr.length % 2 === 0){
        return (sortedArr[(sortedArr.length/2)-1] + sortedArr[(sortedArr.length/2)])/2
    }

    return sortedArr[Math.floor(sortedArr.length/2)];
};