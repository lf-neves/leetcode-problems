function calculateCoordinadeDistanceToOrigin(x: number, y: number): number {
    return Math.floor(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))*100)
}

function kClosest(points: number[][], k: number): number[][] {
    const pointsWithDistanceArray: Array<[number, number, number]> = []

    for (let i = 0; i < points.length; i++) {
        const [x, y] = points[i]
        pointsWithDistanceArray.push([calculateCoordinadeDistanceToOrigin(x, y), x, y])
    }

    const sortedPointsByDistance = pointsWithDistanceArray.sort(([distanceA], [distanceB]) => distanceA - distanceB)

    return sortedPointsByDistance.splice(0, k).map(([_distance, x, y]) => [x, y])
};