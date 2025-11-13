function isValid(s: string): boolean {
    const stack = []
    const map = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    for (let i = 0; i < s.length; i++) {
        if (Object.keys(map).includes(s[i])) {
            stack.push(s[i])
        } else {
            const lastAddedOp = stack.pop()

            if (map[lastAddedOp] !== s[i]) { 
                return false
            }
        }
    }

    return stack.length === 0
};