function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length){
        return false
    }

    if(s === t){
        return true;
    }

    const lettersMap: Record<string, number> = {}

    for(let i=0;i<s.length;i++){
        lettersMap[s[i]] = (lettersMap[s[i]] ?? 0) + 1
    }

    for(let i=0;i<t.length;i++){
        if(lettersMap[t[i]] > 0){
            lettersMap[t[i]] -= 1
        } else {
            lettersMap[t[i]] = 1
        }

    }

    return Object.values(lettersMap).reduce((total, acc) => total + acc) === 0
};