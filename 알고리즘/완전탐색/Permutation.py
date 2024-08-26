def permutation(nums):
    def backtrack(cur):
        if len(cur) == len(nums):
            ans.append(cur[:])
            return
        for num in nums:
            if num not in cur:
                cur.append(num)
                backtrack(cur)
                cur.pop()

    ans = []
    backtrack([])
    return ans


print(f"==>> permutation(4): {permutation([1, 2, 3, 4])}")
