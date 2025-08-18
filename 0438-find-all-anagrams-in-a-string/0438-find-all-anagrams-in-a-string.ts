function findAnagrams(s: string, p: string): number[] {
    if(!p.length){
        const indexesArr: number[] = Array.from({length: 5}, (_, index) => index)
        return indexesArr; 
    }

    if(s.length < p.length){
        return [];
    }

    const pMap = new Map<string, number>()
    const sMap = new Map<string, number>()

    for(let i=0;i<p.length;i++){
        pMap.set(p[i], pMap.has(p[i]) ? pMap.get(p[i]) + 1 : 1);
        sMap.set(s[i], sMap.has(s[i]) ? sMap.get(s[i]) + 1 : 1);
    }

    const areMapsEqual = () => {
        for(const [key] of pMap){
            if(!sMap.has(key)){
                return false;
            }

            if(sMap.get(key) !== pMap.get(key)){
                return false;
            }
        }

        return true;
    }

    let start=0, end = p.length -1;
    const indexesArr = []

    while(end < s.length){
        if(areMapsEqual()){
            indexesArr.push(start)
        }

        const startValueOcc = sMap.get(s[start])
        sMap.set(s[start], startValueOcc - 1)
        
        start++;
        end++;

        sMap.set(s[end], sMap.has(s[end]) ? sMap.get(s[end]) + 1 : 1);
    }


    return indexesArr;
};