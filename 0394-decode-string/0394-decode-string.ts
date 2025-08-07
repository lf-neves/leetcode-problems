function decodeString(s: string): string {
    const stack: [number, string][] = []
    let currentStr = ''
    let currentNumber = 0

    for (let ch of s) {
        if (ch === '[') {
            stack.push([currentNumber, currentStr])
            currentStr = ''
            currentNumber = 0
        } else if (ch === ']') {
            const [repeatNumber, poppedStr] = stack.pop()
            currentStr = poppedStr + currentStr.repeat(repeatNumber)
        } else if (!isNaN(Number(ch))) {
            currentNumber = currentNumber * 10 + (Number(ch))
        } else {
            currentStr += ch
        }
    }

    return currentStr
};