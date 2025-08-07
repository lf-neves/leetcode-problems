function isVowel(c: string) {
    return c === 'a'
        || c === 'A'
        || c === 'e'
        || c === 'E'
        || c === 'i'
        || c === 'I'
        || c === 'o'
        || c === 'O'
        || c === 'u'
        || c === 'U'
}

function isConsonant(c: string) {
    return !isVowel(c)
}

function reverseVowels(s: string): string {
    const pill = Array.from(s)
    let left = 0 
    let right = pill.length - 1

    while (left < right){
        while(left < right && isConsonant(pill[left])){
            left++;
        }

        while(left < right && isConsonant(pill[right])){
            right--;
        }

        if(left < right){
            const aux = pill[left]
            pill[left] = pill[right]
            pill[right] = aux
            left++
            right--
        }
    }


    return pill.join('')
};