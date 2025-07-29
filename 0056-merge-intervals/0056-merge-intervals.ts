function merge(intervals: number[][]): number[][] {
    const concatenatedIntervals = []
    const sortedIntervals = intervals.sort((intA, intB) => intA[0] - intB[0])
    let currentInterval = sortedIntervals[0]


    for (let i = 0; i < intervals.length; i++) {
        if (
            i + 1 < sortedIntervals.length &&
            currentInterval[1] >= sortedIntervals[i + 1][0]
        ) {
            const [start, end] = currentInterval;
            currentInterval = [Math.min(start, sortedIntervals[i + 1][0]), Math.max(sortedIntervals[i + 1][1], end)]

        } else {
            concatenatedIntervals.push(currentInterval)
            currentInterval = sortedIntervals[i + 1]
        }
    }

    return concatenatedIntervals
};