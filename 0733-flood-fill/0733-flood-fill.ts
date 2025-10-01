function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const pixelsQueue = [[sr, sc]]
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const originalColor = image[sr][sc]

    if(originalColor === color){
        return image;
    }

    image[sr][sc] = color;

    while (pixelsQueue.length) {
        const coordinates = pixelsQueue.shift();

        directions.forEach(direction => {
            const x = coordinates[0] + direction[0]
            const y = coordinates[1] + direction[1]

            if (
                x >= 0 && x < image.length &&
                y >= 0 && y < image[0].length &&
                image[x][y] === originalColor
            ) {
                image[x][y] = color;
                pixelsQueue.push([x, y])
            }
        })
    }

    return image;
};