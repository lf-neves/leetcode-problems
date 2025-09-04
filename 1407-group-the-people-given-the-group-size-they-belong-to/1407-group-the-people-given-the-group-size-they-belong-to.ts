function groupThePeople(groupSizes: number[]): number[][] {
    const groupMap = new Map<number, number[]>()

    for(let i=0;i<groupSizes.length;i++){
        const currentGroupSize = groupSizes[i]
        const currentGroupArr = groupMap.get(groupSizes[i]) ?? []

        currentGroupArr.push(i)
        groupMap.set(currentGroupSize, currentGroupArr)
    }

    const result = []

    for (const [size, arr] of groupMap.entries()) {
        while (arr.length > 0) {
            result.push(arr.splice(0, size)) 
        }
    }

    return result;

};