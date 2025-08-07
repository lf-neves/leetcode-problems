function increasingTriplet(nums: number[]): boolean {
    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            // Update the smallest value
            first = num;
        } else if (num <= second) {
            // Update the second smallest value (after first)
            second = num;
        } else {
            // If we find a number greater than both first and second, we have a triplet
            return true;
        }
    }

    return false;
}
