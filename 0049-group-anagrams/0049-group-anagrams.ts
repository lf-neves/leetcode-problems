

function groupAnagrams(strs: string[]): string[][] {
    const map = {}

    for(let i=0;i<strs.length;i++){
        const sortedString = strs[i].split('').sort().join('')

        if(!map[sortedString]){
            map[sortedString] = [strs[i]]
        }else {
            map[sortedString].push(strs[i])
        }
    }

    return Object.values(map)
};