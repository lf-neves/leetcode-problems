function convert(s: string, numRows: number): string {
    if (numRows === 1) {
        return s;
    }

    const result = new Array(numRows).fill('')
    let ascending = true;
    let currentRow = -1;

    for (let i = 0; i < s.length; i++) {
        currentRow += ascending ? 1 : -1
        result[currentRow] += s[i]

        if(currentRow === numRows - 1){
            ascending = false;
        }

        if(currentRow === 0){
            ascending = true;
        }
    }

    return result.join('');
};