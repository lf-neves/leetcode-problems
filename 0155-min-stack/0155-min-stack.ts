class MinStack {
    private stack

    constructor() {
        this.stack = new Array()
    }

    push(val: number): void {
        return this.stack.push(val)
    }

    pop(): void {
        return this.stack.pop()
    }

    top(): number {
        if (!this.stack.length) {
            return null;
        }

        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        if (!this.stack.length) {
            return null;
        }

        const sortedStack: number[] = Array.from(this.stack)
        sortedStack.sort((a, b) => a-b)

        return sortedStack[0] as number
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */