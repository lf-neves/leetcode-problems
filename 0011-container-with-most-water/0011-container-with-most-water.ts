function maxArea(height: number[]): number {
    let start = 0, end = height.length - 1
    let maxArea = 0

    while (start < end) {
        const currentArea = Math.min(height[start], height[end]) * (end - start)

        if (currentArea > maxArea) {
            maxArea = currentArea
        }

        if(height[start] > height[end]){
            end--
        }else {
            start++
        }
    }

    return maxArea
};