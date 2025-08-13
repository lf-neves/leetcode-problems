function checkStraightLine(coordinates: number[][]): boolean {
    if(coordinates.length === 2){
        return true; 
    }

    const [x1, y1]= coordinates.shift()
    const [x2, y2] = coordinates.shift()

    if (x1 === x2) {
        return coordinates.every(([x]) => x === x1);
    }

    const a = (y2 - y1)/(x2 - x1)
    const b = y1 - (a * x1)


    while(coordinates.length){
        const [x, y] = coordinates.shift()
        const result = (a * x) + b

        if(result !== y){
            return false;
        }
    }

    return true;
};