function isPalindrome(s: string): boolean {    
    const newStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    if(newStr.length === 0){
        return true
    }

    let start = 0;
    let end = newStr.length -1 

    while(start < end){
        if(newStr[start] !== newStr[end]){
            console.log('joined')
            return false
        }

        start++
        end--
    }

    return true
};