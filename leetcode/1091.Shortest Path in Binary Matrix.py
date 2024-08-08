from typing import List
from collections import deque


class Solution:
    def checkValid(self, nx, ny, n) -> bool:
        if (0 <= nx and nx < n and 0 <= ny and ny < n):
            return True
        return False

    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        n = len(grid)
        if grid[0][0] == 1 or grid[n-1][n-1] == 1:
            return -1
        if (n == 1):
            return 1

        direction = [[-1, 0], [-1, 1], [0, 1], [1, 1],
                     [1, 0], [1, -1], [0, -1], [-1, -1]]

        visited = [[False] * n for _ in range(n)]

        # n > 2, valid한 grid
        queue = deque()
        queue.append((0, 0, 1))
        visited[0][0] = True
        shortest_cnt = 1e9
        while queue:
            (x, y, val) = queue.popleft()
            for [dx, dy] in direction:
                nx = x + dx
                ny = y + dy
                if self.checkValid(nx, ny, n) and grid[nx][ny] == 0 and not visited[nx][ny]:
                    if (nx == n-1 and ny == n-1):
                        shortest_cnt = min(shortest_cnt, val+1)
                    queue.append((nx, ny, val+1))
                    visited[nx][ny] = True

        # 경로가 없는 경우
        if not visited[n-1][n-1] or shortest_cnt == 1e9:
            return -1
        return shortest_cnt


print(f"==>> Solution: {Solution().shortestPathBinaryMatrix(
    [[0, 0, 0], [1, 1, 0], [1, 1, 0]])}")
print(f"==>> Solution: {Solution().shortestPathBinaryMatrix(
    [[0, 1], [1, 0]])}")
