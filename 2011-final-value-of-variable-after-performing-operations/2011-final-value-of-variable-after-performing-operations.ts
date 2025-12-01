function finalValueAfterOperations(operations: string[]): number {
    let result = 0
    
    while(operations.length){
        const currentOp = operations.pop()

        if(currentOp === "++X" || currentOp === "X++"){
            result++;
        } else if(currentOp === "--X" || currentOp === "X--"){
            result--;
        }
    }

    return result
};