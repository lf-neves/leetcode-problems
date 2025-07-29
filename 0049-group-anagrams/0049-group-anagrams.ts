

function groupAnagrams(strs: string[]): string[][] {
    const anagrams = {}

    for(let i=0;i<strs.length;i++){
        const strArray = Array.from(strs[i]).sort()
        const key = strArray.toString();

        if(anagrams[key]){
            anagrams[key].push(strs[i])
        }else {
            anagrams[key] = [strs[i]]
        }
    }

    return Object.values(anagrams);
};