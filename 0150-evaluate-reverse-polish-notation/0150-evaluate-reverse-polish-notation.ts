function evalRPN(tokens: string[]): number {
    const stack = []
    const isNumber = (val: string) => !Number.isNaN(val)

    for (let i = 0; i < tokens.length; i++) {
        const curr = Number(tokens[i])
        if (!Number.isNaN(curr)) {
            stack.push(curr)

            continue;
        }

        const op1 = stack.pop()
        const op2 = stack.pop()
        let result


        if (tokens[i] === '+') {
            result = op2 + op1
        } else if (tokens[i] === '-') {
            result = op2 - op1
        } else if (tokens[i] === '*') {
            result = op2 * op1
        } else if (tokens[i] === '/') {
            result = Math.trunc(op2 / op1)
        }

        stack.push(result)
    }

    return stack.pop()
};