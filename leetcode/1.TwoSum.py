def twoSum(nums, target):
    dics = {nums[x]:x for x in range(0,len(nums))}
    
    for i in range(0, len(nums)):
        findVal = target - nums[i]
        if findVal in dics.keys() and i != dics[findVal]:
            return [i, dics[findVal]]
    

print(twoSum([2,7,11,15],9))
print(twoSum([3,2,4],6))