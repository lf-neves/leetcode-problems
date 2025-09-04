function validStrings(n: number): string[] {
    let str = new Array(n).fill(0).toString().replaceAll(',', '')
    const validBinaryStrings = []

    while (str.length <= n) {
        if (str.length < n) {
            for (let i = 0; i <= n - str.length; i++) {
                str = '0' + str;
            }
        }

        if (!str.includes('00')) {
            validBinaryStrings.push(str)
        }

        const decimalValue = parseInt(str, 2)
        str = (decimalValue + 1).toString(2)
    }

    return validBinaryStrings;
};