def solution(nums, target):
    def backtrack(k, start, cur):
        if len(cur) == 2 and sum(nums[i]):
            ans.append(list(cur))
            return
        for i in range(start, len(nums)):
            cur.append(nums[i])
            backtrack(k, i+1, cur)
            cur.pop()

    ans = []
    for i in range(len(nums)+1):
        backtrack(i, 0, [])
    return ans


print(f"==>> solution: {solution([1, 2, 3, 4], 5)}")
