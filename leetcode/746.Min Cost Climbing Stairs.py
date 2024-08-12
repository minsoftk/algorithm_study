from typing import List


class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        dp = [cost[0], cost[1]]
        for i in range(2, len(cost)+1):
            if i == len(cost):
                dp.append(min(dp[i-1], dp[i-2]))
            else:
                dp.append(min(dp[i-1] + cost[i], dp[i-2] + cost[i]))
        return dp[-1]


print(f"==>> minCostClimbingStairs: {
      Solution().minCostClimbingStairs([10, 15, 20])}")
