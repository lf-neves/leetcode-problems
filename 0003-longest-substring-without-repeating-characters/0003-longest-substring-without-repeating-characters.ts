function lengthOfLongestSubstring(s: string): number {
    let left = 0;
    let substring = new Set();
    let maxLength = 0;

    for(let right=0;right<s.length;right++){
        while(substring.has(s[right])){
            substring.delete(s[left])
            left++;
        }

        substring.add(s[right])
        maxLength = Math.max(right - left + 1, maxLength)
    }

    return maxLength;
};