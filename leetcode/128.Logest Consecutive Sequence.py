def longestConsecutive(nums: list[int]) -> int:
    nums.sort()
    max_length = 0
    length = 1
    for i, num in enumerate(nums):
        if i < len(nums)-1 and num == nums[i+1]:
            continue
        if num + 1 in nums:
            length += 1
        else:
            length = 1
        max_length = max(length, max_length)
    return max_length
    # num_set = set(nums)
    # longest = 0

    # for num in num_set:
    #     if num - 1 not in num_set:
    #         length = 1
    #         while (num+length in num_set):
    #             length += 1
    #         longest = max(length, longest)
    # return longest


print(f"==>> longestConsecutive: {
      longestConsecutive([100, 4, 200, 1, 3, 2])}")  # 4
print(f"==>> longestConsecutive: {longestConsecutive([])}")
print(f"==>> longestConsecutive: {
      longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])}")  # 9
