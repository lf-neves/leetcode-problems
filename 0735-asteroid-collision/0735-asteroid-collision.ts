function asteroidCollision(asteroids: number[]): number[] {
    const stack = [];
    stack.push(asteroids[0]);

    for (let i = 1; i < asteroids.length; i++) {
        // same signs - never meet
        if (stack[stack.length - 1] * asteroids[i] > 0) {
            stack.push(asteroids[i]);
            continue;
        }
        // different signs, but left go left, rigth goes right - never meet
        if (stack[stack.length - 1] < asteroids[i]) {
            stack.push(asteroids[i]);
            continue;
        }
        let cand = asteroids[i];
        // while right goes left and left (top of stack) goes right - possible explosion
        while(stack.length && cand && stack[stack.length - 1] * cand < 0) {
            // right wins, remove left (top of stack)
            if (Math.abs(stack[stack.length - 1]) < Math.abs(cand)) {
                stack.pop();
            } 
            // left wins, remove right (candidate) and stop while loop
            else if (Math.abs(stack[stack.length - 1]) > Math.abs(cand)) {
                cand = null; // to stop the while
            }
            // when both equal - both explodes
            else {
                stack.pop();
                cand = null;
            }
        }

        // if right wins, need to add to stack
        if (cand) {
            stack.push(cand);
        }
    }
    return stack;
};