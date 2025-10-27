function removeSubfolders(folder: string[]): string[] {
    folder.sort()
    
    const result = [folder[0]]

    for(let i = 1;i<folder.length;i++){
        const lastSelectedFolder = result[result.length - 1] + '/'

        if(!folder[i].startsWith(lastSelectedFolder)){
            result.push(folder[i])
        }
    }

    return result
};