function isPointInTheCircle(point: number[], circle: number[]){
    const [x, y] = point
    const [centerX, centerY, radius] = circle
    
    const distance = Math.pow((x - centerX), 2) + Math.pow((y - centerY), 2)
    const radiusSquare = Math.pow(radius, 2)

    return distance <= radiusSquare
}

function countPoints(points: number[][], queries: number[][]): number[] {
    const results = []

    for(let i=0;i<queries.length;i++){
        let count = 0;
        points.forEach(point => {
            if(isPointInTheCircle(point, queries[i])){
                count++;
            }
        })

        results.push(count)
    }

    return results; 
};