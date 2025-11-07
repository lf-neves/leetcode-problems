const isNumber = (s: string) => s.charCodeAt(0) >= 48 && s.charCodeAt(0) <= 57
const isLetter = (s: string) => s.charCodeAt(0) >= 97 && s.charCodeAt(0) <= 122

function isPalindrome(s: string): boolean {    
    if(s.length === 1){
        return true
    }

    const lowerCaseString = s.toLowerCase()

    let newStr = ''
    let start = 0
    let end = s.length - 1

    while(start < end){
        console.log("start: ", start)
        console.log("end: ", end)

        if(!isNumber(lowerCaseString[start]) && !isLetter(lowerCaseString[start])){ 
            start++;
            continue;
        }

        if(!isNumber(lowerCaseString[end]) && !isLetter(lowerCaseString[end])){
            end--;
            continue
        }


        if(lowerCaseString[start] !== lowerCaseString[end]){
            return false
        }

        start++
        end--
    }

    return true
};