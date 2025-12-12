function isOneCharDiff(gen1: string, gen2: string) {
    let count = 0;
    for (let i = 0; i < gen1.length; i++) {
        if (gen1[i] !== gen2[i]) count++;
        if (count > 1) return false;
    }
    return count === 1;
}

function minMutation(startGene: string, endGene: string, bank: string[]): number {
    if (!bank.includes(endGene)) return -1;

    // Build adjacency list preserving your logic
    const strMap: Record<string, string[]> = {};
    const allGenes = [startGene, ...bank];

    for (const g1 of allGenes) {
        strMap[g1] = [];
        for (const g2 of allGenes) {
            if (g1 !== g2 && isOneCharDiff(g1, g2)) {
                strMap[g1].push(g2);
            }
        }
    }

    // BFS to find minimum steps
    const queue: [string, number][] = [[startGene, 0]];
    const visited = new Set<string>([startGene]);

    while (queue.length > 0) {
        const [current, steps] = queue.shift()!;

        if (current === endGene) {
            return steps;
        }

        for (const next of strMap[current]) {
            if (!visited.has(next)) {
                visited.add(next);
                queue.push([next, steps + 1]);
            }
        }
    }

    return -1;
}
