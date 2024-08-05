def twoSum(nums, target):
    dics = {val: i for i, val in enumerate(nums)}
    for i, val in enumerate(nums):
        find_value = target - val
        if find_value in dics.keys() and i != dics[find_value]:
            return [i, dics[find_value]]

print(twoSum([2,7,11,15],9))
print(twoSum([3,2,4],6))