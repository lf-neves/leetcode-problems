function findTheDifference(s: string, t: string): string {
    if(!s.length){
        return t;
    }

    const sArr = s.split('').sort()
    const tArr = t.split('').sort()

    while(sArr.length){
        const currentT = tArr.pop()
        if(sArr.pop() !== currentT){
            return currentT;
        }
    }

    return tArr[tArr.length -1]
};