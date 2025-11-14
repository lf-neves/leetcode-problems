function decodeString(s: string): string {
    const stack = []
    let currentNum = 0
    let currentStr = ''

    for (let char of s) {
        if (!isNaN(Number(char))) {
            currentNum = currentNum * 10 + Number(char)
            continue;
        }

        if (char === '[') {
            stack.push(currentStr)
            stack.push(currentNum)
            currentStr = ""
            currentNum = 0

            continue;
        }

        if (char === ']') {
            const num = stack.pop()
            const prevStr = stack.pop()
            currentStr = prevStr + currentStr.repeat(num)

            continue
        }

        currentStr += char
    }

    return currentStr
};