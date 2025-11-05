function topKFrequent(nums: number[], k: number): number[] {
    const elementOcurrencyByElementValueMap: Record<number, number> = {}

    for (let i = 0; i < nums.length; i++) {
        elementOcurrencyByElementValueMap[nums[i]] =
            (elementOcurrencyByElementValueMap[nums[i]] ?? 0) + 1;
    }

    return Object.entries(elementOcurrencyByElementValueMap).sort(([kA, occurrenciesA], [kB, occurrenciesB]) => occurrenciesB - occurrenciesA).map(([key, value]) => Number(key)).slice(0, k)
};