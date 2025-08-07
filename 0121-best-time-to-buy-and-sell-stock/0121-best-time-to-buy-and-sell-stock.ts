function maxProfit(prices: number[]): number {
    let minPrice = Number.MAX_VALUE
    let maxProfit = 0;

    for(let i=0;i<prices.length;i++){
        minPrice = Math.min(minPrice, prices[i])
        maxProfit = Math.max(prices[i]-minPrice, maxProfit)
    }

    return maxProfit;
};