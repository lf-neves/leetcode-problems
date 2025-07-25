function isHappy(n: number): boolean {
    let result = n;
    let previousResult = null
    const checkedNumbers = []

    while(result !== 1){
        const stringNumber = result?.toString();
        const sumArray = []

        for(let i=0;i<stringNumber.length;i++){
            sumArray.push(Number(stringNumber[i]))
        }

        console.log(sumArray)
        console.log(result)

        checkedNumbers.push(result)
        result = sumArray.reduce((acc, total) => {
            console.log('--->', total, acc)
            return acc + Math.pow(total, 2)           
        }, 0)

        if(checkedNumbers.includes(result)){
            return false;
        }

    }

    return true;
};