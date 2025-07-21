function twoSum(numbers: number[], target: number): number[] {
    let index = 0;

    while(true){
        for(let i = index + 1;i<numbers.length;i++){
            if(numbers[index] + numbers[i] === target){
                return [index + 1, i + 1]
            }
        }
        index++;
    }
};