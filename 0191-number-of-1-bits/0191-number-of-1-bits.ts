function hammingWeight(n: number): number {
    const binaryString = n.toString(2)
    let count = 0;

    for(let i=0;i<binaryString.length;i++){
        if(binaryString[i] === '1'){
            count++
        }
    }

    return count;
};