function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length){
        return false;
    }
    
    const map = {}

    for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        } else {
            map[s[i]] += 1;
        }
    }

    for(let i=0;i<t.length;i++){
        if(!map[t[i]] || map[t[i]] <= 0){
            return false;
        }

        map[t[i]]--
    }


    console.log(Object.values(map))

    return true;
};