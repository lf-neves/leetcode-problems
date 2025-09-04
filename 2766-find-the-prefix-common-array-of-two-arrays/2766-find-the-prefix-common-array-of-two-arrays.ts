function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const a = A, b = B;
    const result = [];

    for(let i=0;i<a.length;i++){
        const subA = a.slice(0, i+1)
        const subB = b.slice(0, i+1)
        let count = 0;

        console.log('subA: ', subA)
        console.log('subB: ', subB)

        subA.forEach(itemA => {
            if(subB.includes(itemA)){
                count++;
            }
        })

        console.log("count: ", count)
        console.log('============')

        result.push(count)
    }

    return result
};