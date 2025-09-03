function findArray(pref: number[]): number[] {
    if(pref.length === 1){
        return pref;
    }

   const arr: number[] = [];
    arr[0] = pref[0];

    for (let i = 1; i < pref.length; i++) {
        arr[i] = pref[i] ^ pref[i - 1];
    }

    return arr;
};