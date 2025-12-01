function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
    const adjacencyList: [number, number][][] = Array.from(
        { length: n },
        () => []
    );

    for (const [cityA, cityB, weight] of edges) {
        adjacencyList[cityA].push([cityB, weight]);
        adjacencyList[cityB].push([cityA, weight]);
    }

    const dijkstra = (startCity: number) => {
        const minDistanceToCity = Array(n).fill(Infinity)
        minDistanceToCity[startCity] = 0;

        const priorityQueue = [[0, startCity]] 

        while(priorityQueue.length){
            priorityQueue.sort((a, b) => a[0] - b[0])
            const [currentDistance, currentCity] = priorityQueue.shift()

            if(currentDistance > minDistanceToCity[currentCity]){
                continue;
            }

            for(const [neighborCity, edgeWeight] of adjacencyList[currentCity]){
                const newDistance = currentDistance + edgeWeight;

                if(newDistance < minDistanceToCity[neighborCity]){
                    minDistanceToCity[neighborCity] = newDistance
                    priorityQueue.push([newDistance, neighborCity])
                }
            }
        }

        return minDistanceToCity
    }

    let bestCity = -1 
    let smallestReachableCount = Infinity

    for(let city = 0;city<n;city++){
        const shortestPaths = dijkstra(city)
        const reachableCitiesCount = shortestPaths.filter(distance => distance <= distanceThreshold).length -1 

        if(reachableCitiesCount < smallestReachableCount || (reachableCitiesCount === smallestReachableCount && city > bestCity)){
            smallestReachableCount = reachableCitiesCount
            bestCity = city
        }
    }

    return bestCity

};