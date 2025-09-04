function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const a = A, b = B;
    const result = [];

    for(let i=0;i<a.length;i++){
        const subA = a.slice(0, i+1)
        const subB = b.slice(0, i+1)
        let count = 0;

        subA.forEach(itemA => {
            if(subB.includes(itemA)){
                count++;
            }
        })

        result.push(count)
    }

    return result
};