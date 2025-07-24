

function spiralOrder(matrix: number[][]): number[] {
    const elements = [];

    while (matrix.length && matrix[0][0] !== undefined) {
        console.log(elements)
        elements.push(...matrix.shift());
        matrix.forEach(row => elements.push(row.pop()))
        matrix.reverse().map(row => row.reverse());
    }

    return elements;
};