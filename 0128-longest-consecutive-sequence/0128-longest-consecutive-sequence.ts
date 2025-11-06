function longestConsecutive(nums: number[]): number {
    const numsSet = new Set(nums)
    let longest = 0;

    numsSet.forEach(num => {
        if(numsSet.has(num -1)){
           return;
        }

        let length = 0;

        while(numsSet.has(num + length)){
            length++
        }

        longest = Math.max(longest, length)
    })

    return longest
};