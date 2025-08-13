function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const map = new Map<number, number[]>()
    const inDegree = new Array(numCourses).fill(0)
    const takenCourses = []

    for (let i = 0; i < numCourses; i++) {
        map.set(i, [])
    }

    for (const [a, b] of prerequisites) {
        map.get(b).push(a);
        inDegree[a]++;
    }

    const noReqCourses = []
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            noReqCourses.push(i)
        }
    }

    while (noReqCourses.length) {
        const course = noReqCourses.shift()
        takenCourses.push(course)

        for (const next of map.get(course)) {
            inDegree[next]--;
            if (inDegree[next] === 0) {
                noReqCourses.push(next)
            }
        }
    }

    if(takenCourses.length !== numCourses){
        return [];
    }

    return takenCourses;
}
