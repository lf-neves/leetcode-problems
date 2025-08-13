function isPowerOfThree(n: number): boolean {
    let num = 1;
    let i = 0;
    
    while(num < n){
        num = Math.pow(3, i)
        i++;
    }

    return num === n   
};