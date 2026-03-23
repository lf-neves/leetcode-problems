function groupAnagrams(strs: string[]): string[][] {
    const result = {}

    for(let i=0;i<strs.length;i++){
        const curr = strs[i]
        const currSortedStr = curr.split('').sort().join('')

        if(!result[currSortedStr]){
            result[currSortedStr] = [curr]
        } else {
            result[currSortedStr].push(curr)
        }
    }

    return Object.values(result)

};