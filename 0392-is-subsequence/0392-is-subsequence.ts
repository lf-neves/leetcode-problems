function isSubsequence(s: string, t: string): boolean {

    if(s === t){
        return true;
    }

    if(s.length > t.length){
        return false
    }

    let left = 0
    for(let i=0;i<t.length;i++){
        if(t[i] === s[left]){
            left++;
        }

        if(left === s.length){
            return true
        }
    }

    return false
    
};