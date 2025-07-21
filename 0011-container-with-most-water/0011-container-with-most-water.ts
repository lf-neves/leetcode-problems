function getLowerHeight(a, b) {
    return a < b ? a : b
}

function maxArea(height: number[]): number {
    let left = 0
    let right = height.length - 1
    let biggestArea = 0

    while (left < right) {
        const lowerHeight = getLowerHeight(height[right], height[left])
        const currentArea = lowerHeight * (right - left)

        if (currentArea > biggestArea) {
            biggestArea = currentArea
        }

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return biggestArea
};