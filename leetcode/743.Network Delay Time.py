from typing import List
import heapq
from collections import defaultdict


class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        graph = defaultdict(list)

        for [cur_v, next_v, weight] in times:
            graph[cur_v].append((weight, next_v))

        costs = {}
        pq = []

        heapq.heappush(pq, (0, k))

        while pq:
            [cur_cost, cur_v] = heapq.heappop(pq)
            if cur_v not in costs:
                costs[cur_v] = cur_cost
                for (cost, next_v) in graph[cur_v]:
                    next_cost = cur_cost+cost
                    heapq.heappush(pq, (next_cost, next_v))

        result = -1
        for i in range(1, n+1):
            if i not in costs:
                return -1
        return max(costs.values())


# print(f"==>> Solution: {Solution().networkDelayTime(
#     [[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2)}")
print(f"==>> Solution: {Solution().networkDelayTime(
    [[1, 2, 1], [2, 1, 3]], 2, 2)}")
