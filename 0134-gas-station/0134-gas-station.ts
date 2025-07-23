function canCompleteCircuit(gas: number[], cost: number[]): number {
    let tankAmount = 0
    let cumulatedGasAmount = 0
    let nextStartingIndex = 0

    for(let i=0;i<gas.length;i++){
        const expense = gas[i] - cost[i]

        tankAmount += expense
        cumulatedGasAmount += expense

        if(tankAmount < 0){
            nextStartingIndex = i + 1
            tankAmount = 0
        }
    }

    return cumulatedGasAmount < 0 ? -1 : nextStartingIndex;
};
