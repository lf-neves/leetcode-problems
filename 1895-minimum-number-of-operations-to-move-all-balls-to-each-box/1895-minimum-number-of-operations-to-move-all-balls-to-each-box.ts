function minOperations(boxes: string): number[] {
    const boxesArr = boxes.split('').map(val => Number(val))
    const totalNumberOfBoxes = boxesArr.reduce((curr, total) => curr + total)
    const answer = new Array(boxesArr.length).fill(0)
    
    for(let i=0;i<boxesArr.length;i++){
        let swaps = 0;
        for(let j=0;j<boxesArr.length;j++){
            if(j === i){
                continue;
            }

            swaps += boxesArr[j] * Math.abs(j-i)
        }

        answer[i] = swaps;
    }

    return answer; 
};