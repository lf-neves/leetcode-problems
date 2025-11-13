class MinStack {
    stack: number[]
    minStack: number[]

    constructor() {
        this.stack = []
        this.minStack = []
    }

    push(val: number): void {
        this.stack.push(val)

        const currentMin = this.minStack.length === 0 ? val : this.minStack[this.minStack.length - 1];
        if (val < currentMin) this.minStack.push(val);
        else this.minStack.push(currentMin);
    }

    pop(): void {
       if (this.stack.length > 0) {
            this.stack.pop();
            this.minStack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return this.minStack[this.stack.length - 1]
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