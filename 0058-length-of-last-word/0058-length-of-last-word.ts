function lengthOfLastWord(s: string): number {
    const splittedStringArray = s.trim().split(' ')
    console.log(splittedStringArray)

    return splittedStringArray[splittedStringArray.length-1].length;
};