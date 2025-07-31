function simplifyPath(path: string): string {
    const pathDirArr = path.split('/')
    const finalDir = []

    for(const dir of pathDirArr){
        if(dir === '.' || dir === "") {
            continue;
        }

        if(dir === '..'){
            finalDir.pop()
            continue;
        }

        finalDir.push(dir)
    }

    return '/'+finalDir.join('/')
};