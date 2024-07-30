def twoSum(nums, target):
    dics = {nums[x]:x for x in range(0,len(nums))}
    nums.sort()
    start = 0; end=len(nums)-1
    while(start<end):
        if (nums[start] + nums[end] == target):
            return [dics[nums[start]],dics[nums[end]]]
        elif nums[start]+nums[end] > target : end-=1
        elif nums[start]+nums[end] < target : start+=1
    

print(twoSum([2,7,11,15],9))
print(twoSum([3,2,4],6))