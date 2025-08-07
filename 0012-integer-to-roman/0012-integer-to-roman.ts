function intToRoman(num: number): string {
    const romanToDecimalMap = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40, 
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1,
    }

    let currentNum = num;
    let finalStr = ''

    const romanToDecimalMapEntries = Object.entries(romanToDecimalMap);

    romanToDecimalMapEntries.forEach(([alg, value], index) => {
        const numberOfAlgs = Math.floor(currentNum/value)
        finalStr += alg.repeat(numberOfAlgs)
        currentNum -= numberOfAlgs * value
    })

    return finalStr;
};