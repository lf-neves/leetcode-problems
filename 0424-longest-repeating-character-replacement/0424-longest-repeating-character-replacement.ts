function characterReplacement(s: string, k: number): number {
    let maxLength = 0, start = 0, maxCount = 0
    const countMap = {}

    for (let end = 0; end < s.length; end++) { 
        countMap[s[end]] = (countMap[s[end]] || 0) + 1
        maxCount = Math.max(countMap[s[end]], maxCount)

        while(end - start + 1 - maxCount > k){
            countMap[s[start]]--;
            start++
        }

        const updatedStringSize = end - start + 1

        maxLength = Math.max(maxLength, updatedStringSize)
    }

    return maxLength
};