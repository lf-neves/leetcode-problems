function searchMatrix(matrix: number[][], target: number): boolean {
    let arr = matrix.flat()
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        const middle = Math.floor((left + right) / 2)

        if (target === arr[middle]) {
            return true;
        }

        if (target > arr[middle]) {
            left = middle + 1 
        } else if (target < arr[middle]) {
            right = middle - 1
        }
    }

    return false;
};