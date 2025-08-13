function nextGreatestLetter(letters: string[], target: string): string {
    const firstItem = letters[0]
    let current;

    while(letters.length){
        current = letters.shift()

        if(current.charCodeAt(0) > target.charCodeAt(0)){
            return current;
        }
    }

    return firstItem;
};