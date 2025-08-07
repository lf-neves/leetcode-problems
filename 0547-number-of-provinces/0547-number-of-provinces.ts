function findCircleNum(isConnected: number[][]): number {
    const visited = new Set()
    let provincesCount = 0

    function visitAndSearchConnections(start){
        visited.add(start)
        for(let end = 0; end< isConnected.length; end++){
            if(isConnected[start][end] && !visited.has(end)){
                visitAndSearchConnections(end);
            }
        }
    }

    for(let start = 0; start < isConnected.length; start++){
        if(!visited.has(start)){
            provincesCount++;
            visitAndSearchConnections(start);
        }
    }

    return provincesCount;
};