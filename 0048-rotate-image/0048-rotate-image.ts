/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    let left = 0;
    let right = matrix[0].length-1;

    while(left < right){
        for(let i=0;i<right - left;i++){
            const top = left;
            const bottom = right;
            const topLeftAux = matrix[top][left+i]

            matrix[top][left+i] = matrix[bottom -i][left]
            matrix[bottom -i][left] = matrix[bottom][right -i]
            matrix[bottom][right -i] = matrix[top+i][right]
            matrix[top+i][right] = topLeftAux;
        }

        left ++;
        right --;
    }
};