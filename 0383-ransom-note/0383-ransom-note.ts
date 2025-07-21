function canConstruct(ransomNote: string, magazine: string): boolean {
    const magazineMap = {};

    for(let i=0;i<magazine.length;i++){
        if(!magazineMap[magazine[i]]){
            magazineMap[magazine[i]] = 1;
        }else {
            magazineMap[magazine[i]]++;
        }
    }

    for(let i=0;i<ransomNote.length;i++){
        if(!magazineMap[ransomNote[i]]){
            return false;
        }

        magazineMap[ransomNote[i]]--;
    }

    return true;
};