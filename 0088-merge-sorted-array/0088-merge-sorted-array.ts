/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = 0;

    while(nums2.length){
        if(nums1[i] === 0){
            nums1[i] = nums2.shift()
        }

        if(i < nums1.length){
            i++;
        }
    }

    nums1.sort((a, b) => a - b)
};