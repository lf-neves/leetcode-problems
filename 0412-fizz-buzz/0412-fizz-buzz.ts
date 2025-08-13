function fizzBuzz(n: number): string[] {
    const answer = []

    for(let i=1;i<=n;i++){
        let currentValue = '';

        if(i % 3 === 0){
            currentValue += "Fizz"
        }

        if(i % 5 === 0){
            currentValue += "Buzz"
        }

        if(i % 3 !== 0 && i % 5 !== 0){
            currentValue = `${i}`
        }

        answer.push(currentValue)
    }

    return answer;
};