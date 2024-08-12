class Solution:
    def climbStairs(self, n: int) -> int:
        memo = {
            1: 1,
            2: 2,
            3: 3
        }

        def dp(n):
            if n == 1:
                return 1
            if (n == 2):
                return 2
            else:
                if n in memo:
                    return memo[n]
                memo[n] = dp(n-1) + dp(n-2)
                return memo[n]
        dp(n)
        return memo[n]


print(f"==>> Solution: {Solution().climbStairs(2)}")  # 2
# print(f"==>> Solution: {Solution().climbStairs(3)}")  # 3
print(f"==>> Solution: {Solution().climbStairs(4)}")  # 5
