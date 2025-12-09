function mySqrt(x: number): number {
    let lastResult = 0

    while(true){
        const newResult = lastResult + 1

        if(newResult * newResult > x){
            return lastResult;
        }

        lastResult = newResult

    }
};