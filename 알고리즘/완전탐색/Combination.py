def Combination(nums, k):
    def backtrack(start, cur):
        if len(cur) == k:
            ans.append(list(cur))
            return
        for i in range(start, len(nums)):
            cur.append(nums[i])
            backtrack(i+1, cur)
            cur.pop()

    ans = []
    backtrack(0, [])
    return ans


print(f"==>> Combination: {Combination([1, 2, 3, 4], 2)}")
