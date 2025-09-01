function longestPalindrome(s: string): string {
    if (s.length < 2){
        return s;
    }

    
    let biggestPal = s[0]

    const expandAroundCenter = (left: number, right: number) => {
        while(left >=0 && right < s.length && s[left] === s[right]){
            left--;
            right++;
        }

        return s.slice(left+1, right)
    }

    for(let i=0;i<s.length;i++){
        const oddPal = expandAroundCenter(i, i+1)      
        const evenPal = expandAroundCenter(i, i)

        if(oddPal.length > biggestPal.length){
            biggestPal = oddPal;
        }

        if(evenPal.length > biggestPal.length){
            biggestPal = evenPal;
        }
    }

    return biggestPal;
};