function hasOverlapping(intervalA: number[], intervalB: number[]) {
    const [startA, endA] = intervalA
    const [startB, endB] = intervalB

    if (endA < startB || endB < startA) {
        return false;
    }

    return true;
}

function mergeInterval(intervalA: number[], intervalB: number[]){
    const [startA, endA] = intervalA
    const [startB, endB] = intervalB
    const newStart = Math.min(startA, startB)
    const newEnd = Math.max(endA, endB)

    return [newStart, newEnd]
}

function merge(intervals: number[][]): number[][] {
    const result = []
    intervals.sort((a, b) => a[0] - b[0]);

    while (intervals.length > 1) {
        const currInterval = intervals.shift()
        const nextInterval = intervals.shift()

        if (hasOverlapping(currInterval, nextInterval)) {
            const mergedInterval = mergeInterval(currInterval, nextInterval)
            intervals.unshift(mergedInterval)
        } else {
            result.push(currInterval)
            intervals.unshift(nextInterval)
        }
    }

    result.push(intervals.pop())

    return result;
};