function evalRPN(tokens: string[]): number {
    const stack = [];

    for(let i=0;i<tokens.length;i++){
        if(`${Number(tokens[i])}` === tokens[i]){
            stack.push(Number(tokens[i]))
        } else if(tokens[i] === '+'){
            stack.push(stack.pop() + stack.pop())
        }
        else if(tokens[i] === '-'){
            const firstElement = stack.pop()
            stack.push(stack.pop() - firstElement)
        } 
        else if(tokens[i] === '*'){
            stack.push(stack.pop() * stack.pop())
        }
        else if(tokens[i] === '/'){
            const firstElement = stack.pop()
            const result = stack.pop() / firstElement
            stack.push(result > 0 ? Math.floor(result) : Math.ceil(result))
        }
    }

    return stack.pop()
};