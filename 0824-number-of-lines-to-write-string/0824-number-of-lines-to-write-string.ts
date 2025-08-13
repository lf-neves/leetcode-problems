function numberOfLines(widths: number[], s: string): number[] {
    let numberOfLines = 1;
    let currentLineSize = 0;
    
    s.split('').forEach(letter => {
        const currentLetterSize = widths[letter.charCodeAt(0)-97]

        if(currentLineSize + currentLetterSize > 100){
            numberOfLines++;
            currentLineSize = currentLetterSize;
        } else {
            currentLineSize += currentLetterSize;
        } 
    })

    return [numberOfLines, currentLineSize || 100]
};