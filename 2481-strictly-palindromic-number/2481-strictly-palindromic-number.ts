function isStrictlyPalindromic(n: number): boolean {
    const isPalindromic = (s: string) => s.split('') === s.split('').reverse()

    for(let i=2;i<=n-2;i++){
        const convertedStr = n.toString(i)
        
        if(!isPalindromic(convertedStr)){
            return false;
        }
    }

    return true;
};