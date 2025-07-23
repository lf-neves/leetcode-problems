function trap(height: number[]): number {
    const maxLeft = new Array(height.length)
    const maxRight = new Array(height.length)

    for (let i = 0; i < height.length; i++) {
        if (i - 1 < 0) {
            maxLeft[i] = 0;
        } else {
            maxLeft[i] = Math.max(height[i - 1], maxLeft[i - 1])
        }
    }

    for (let i = height.length - 1; i >= 0; i--) {
        if (i + 1 >= height.length) {
            maxRight[i] = 0;
        } else {
            maxRight[i] = Math.max(height[i + 1], maxRight[i + 1])
        }
    }

    const amountByPosition = new Array(height.length)

    for (let i = 0; i < height.length; i++) {
        const currentAmount = Math.min(maxLeft[i], maxRight[i]) - height[i]
        amountByPosition[i] = currentAmount > 0 ? currentAmount : 0;
    }

    return amountByPosition.reduce((acc, total) => total + acc, 0)
};