function maxProfit(prices: number[]): number {
    let totalProfit = 0
    let buyPrice = prices[0]

    for (let today = 0; today < prices.length; today++) {
        const nextDay = today + 1

        if (nextDay > prices.length-1 && buyPrice !== null) {
            totalProfit += prices[today] - buyPrice;
        } else if (prices[nextDay] > prices[today] && buyPrice === null) {
            buyPrice = prices[today]
        } else if(prices[nextDay] < prices[today] && buyPrice !== null){
            totalProfit += prices[today] - buyPrice
            buyPrice = null
        }
    }

    return totalProfit;
};