function firstUniqChar(s: string): number {
    const occMap = new Map()

    for(let c of s){
        occMap.set(c, (occMap.get(c) || 0) + 1)
    }

    for(let i=0;i<s.length;i++){
        if(occMap.get(s[i]) === 1){
            return i;
        }
    }
    
    return -1;
};