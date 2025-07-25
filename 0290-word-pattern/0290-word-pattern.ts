function wordPattern(pattern: string, s: string): boolean {
    const map = new Map();
    const p = pattern.split("");
    const c = s.split(" ");

    if (p.length !== c.length) return false;

    const pSet = [...new Set(p)];
    const cSet = [...new Set(c)];

    if (pSet.length !== cSet.length) return false;

    for (let i = 0; i < c.length; ++i) {
        if (map.has(p[i]) && map.get(p[i]) !== c[i]) return false;
        map.set(p[i], c[i]);
    }

    return true;
};