function longestCommonPrefix(strs: string[]): string {
    if(!strs.length){
        return '';
    }
    
    let prefix = '';

    strs.sort()
    const smallestStr = strs[0];
    const biggestStr = strs[strs.length - 1]

    for(let i=0; i<smallestStr.length; i++){
        if(smallestStr[i] !== biggestStr[i]){
            return prefix
        }
        
        prefix += smallestStr[i]
    }
    

    return prefix;
};