function canVisitAllRooms(rooms: number[][]): boolean {
    const storedKeys = [0];
    const visitedRooms = new Set();

    while(storedKeys.length){
        const key = storedKeys.pop()

        if(!visitedRooms.has(key)){
            visitedRooms.add(key);
            storedKeys.push(...rooms[key])
        }
    }

    return visitedRooms.size === rooms.length;
};