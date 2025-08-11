function addBinary(a: string, b: string): string {
    let carryOver = 0;
    let result = ''

    const aArr = a.split('')
    const bArr = b.split('')

    while (aArr.length || bArr.length || carryOver) {
        const op1 = Number(aArr.pop() ?? 0);
        const op2 = Number(bArr.pop() ?? 0);
        const sum = op1 + op2 + carryOver;
        carryOver = 0;

        if (sum === 0 && (carryOver || aArr.length || bArr.length)) {
            result = '0' + result;
        } else if (sum === 1) {
            result = '1' + result;
        } else if (sum === 2) {
            result = '0' + result;
            carryOver = 1;
        } else if (sum === 3){
            result = '1' + result;
            carryOver = 1;
        }
    }

    return !result.length ? '0' : result;
};