function intersection(nums1: number[], nums2: number[]): number[] {
    const intersectionArr = [];
    let smallestArr;
    let biggestArr;

    if (nums1.length < nums2.length) {
        smallestArr = nums1;
        biggestArr = nums2;
    } else {
        smallestArr = nums2;
        biggestArr = nums1;
    }

    console.log(biggestArr, smallestArr)

    for (let i = 0; i < smallestArr.length; i++) {
        if (biggestArr.includes(smallestArr[i]) && !intersectionArr.includes(smallestArr[i])) {
            intersectionArr.push(smallestArr[i])
        }
    }

    return intersectionArr;
};