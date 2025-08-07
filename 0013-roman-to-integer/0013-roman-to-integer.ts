function romanToInt(s: string): number {
    const romanToDecimalMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let totalDecimal = 0;
    let previousAlg = null

    for(let i=s.length-1;i>=0;i--){
        const currentAlg = s[i]

        if(previousAlg && romanToDecimalMap[previousAlg] > romanToDecimalMap[currentAlg]){
            totalDecimal -= romanToDecimalMap[currentAlg];
        } else {
            totalDecimal += romanToDecimalMap[currentAlg];
        }        
        
        previousAlg = currentAlg;
    }

    return totalDecimal;

};