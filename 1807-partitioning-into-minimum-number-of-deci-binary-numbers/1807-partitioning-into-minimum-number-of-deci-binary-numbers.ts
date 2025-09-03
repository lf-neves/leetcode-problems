function minPartitions(n: string): number {
    const nums = n.split('').map(n => Number(n))
    let biggest = 0

    console.log(nums)
    
    for(let i=0;i<nums.length;i++){
        let arr = []
        while(nums[i] !== 0){
            console.log(nums[i])
            arr.push(1)
            nums[i] -= 1;
        }
        
        if(arr.length > biggest){
            biggest = arr.length
        }
    }
    
    return biggest;
};