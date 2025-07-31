function findMinArrowShots(points: number[][]): number {
    const sortedPoints = points.sort((pointA, pointB) => pointA[1] - pointB[1])
    let numberOfArrows = 1;
    let currentArrowPosition = sortedPoints[0][1]

    for(let i=1;i<sortedPoints.length;i++){
        const [start, end] = sortedPoints[i]

        if(start > currentArrowPosition){
            numberOfArrows ++;
            currentArrowPosition = end;
        }
    }

    return numberOfArrows;
};