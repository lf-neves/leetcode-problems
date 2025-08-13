function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const map = new Map<number, number[]>()
    const inDegree = new Array(numCourses).fill(0)

    for(let i=0;i<numCourses;i++){
        map.set(i, [])
    }

    for (const [a, b] of prerequisites) {
        map.get(b).push(a);
        inDegree[a]++;
    }

    const noReqCourses = []
    for(let i=0;i<numCourses;i++){
        if(inDegree[i] === 0){
            noReqCourses.push(i)
        }
    }

    let takenCourses = 0;
    while(noReqCourses.length){
        const course = noReqCourses.shift()
        takenCourses++;

        for(const next of map.get(course)){
            inDegree[next]--;
            if(inDegree[next] === 0){
                noReqCourses.push(next)
            }
        }
    }

    return takenCourses === numCourses; 

};