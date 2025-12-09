function plusOne(digits: number[]): number[] {
    let currentIndex = digits.length - 1
    let carryOver = 1

    while (currentIndex >= 0){
        let currentDigit = digits[currentIndex] + carryOver;

        if(currentDigit === 10){
            currentDigit = 0;
            carryOver = 1
        } else {
            carryOver = 0
        }

        digits[currentIndex] = currentDigit
        currentIndex--
    }

    if(carryOver === 1){
        digits.unshift(1)
    }

    return digits;
};