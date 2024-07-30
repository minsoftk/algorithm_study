function twoSum(nums: number[], target: number): number[] {
    const hash = new Map<number,number>();
    nums.forEach((x,i) => hash.set(x , i));

    let result: number[] =[0,0];
    for (let i = 0; i < nums.length; i+=1){
        const findValue = target - nums[i];
        const hashValue = hash.get(findValue);
        if (hashValue && i !== hashValue){
            result = [i, hash.get(findValue) as number]
            break;
        }else continue;
    }

    return result;
};

console.log(twoSum([2,7,11,15],9))
console.log(twoSum([3,2,4],6))
console.log(twoSum([3,3],6))