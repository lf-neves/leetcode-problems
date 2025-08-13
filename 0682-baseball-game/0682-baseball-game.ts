function calPoints(operations: string[]): number {
    const records: number[] = []

    operations.forEach(operation => {
        if(`${Number(operation)}` === operation){
            records.push(Number(operation))
        } else if(operation === '+'){
           records.push(records[records.length -1] + records[records.length -2])
        } else if(operation === 'C'){
            records.pop()
        } else if(operation === 'D'){
            records.push(records[records.length -1] * 2)
        }
    })

    if(!records.length){
        return 0;
    }

    return records.reduce((acc, total) => acc + total)
};