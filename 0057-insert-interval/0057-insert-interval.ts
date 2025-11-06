function insert(intervals: number[][], newInterval: number[]): number[][] {
    if(!intervals.length){
        return [newInterval]
    }


    let lowest = Infinity, biggest = -Infinity
    const result = []

    intervals.forEach(interval => {
        const [start, end] = interval
        const [newStart, newEnd] = newInterval

        if ((start <= newStart && end >= newStart) ||
            (newStart <= start && newEnd >= end) ||
            (newStart <= start && newEnd <= end && newEnd >= start)) {
            lowest = Math.min(lowest, start, newStart)
            biggest = Math.max(biggest, end, newEnd)
        } else {
            result.push(interval)
        }
    })

    if(biggest === -Infinity && lowest === Infinity){
        result.push(newInterval)
    }else {
        result.push([lowest, biggest])
    }

    return result.sort((a, b) => a[1] - b[1])
}