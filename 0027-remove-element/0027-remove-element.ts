function removeElement(nums: number[], val: number): number {
    const filteredResult = nums.filter(n => n !== val)
    nums.splice(0, nums.length, ...filteredResult)

    return nums.length

};