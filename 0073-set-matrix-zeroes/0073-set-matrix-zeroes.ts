/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const columns = [];
    const rows = [];

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j] === 0){
                columns.push(j)
                rows.push(i)
            }        
        }
    }

    while(rows.length > 0){
        const currentRow = rows.pop();

        for(let j=0;j<matrix[0].length;j++){
            matrix[currentRow][j] = 0;
        }
    }

    while(columns.length > 0){
        const currentColumn = columns.pop();

        for(let i=0;i<matrix.length;i++){
            matrix[i][currentColumn] = 0;
        }
    }
};