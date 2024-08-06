from typing import List
from collections import deque


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        # visited = [arr[:] for arr in grid]
        m = len(grid)
        n = len(grid[0])
        visited = [[False] * n for _ in range(m)]
        queue = deque()
        cnt = 0

        for i, _ in enumerate(visited):
            for j, _ in enumerate(visited[i]):
                if (grid[i][j] == '1' and not visited[i][j]):
                    queue.append((i, j))
                    visited[i][j] = True
                    while queue:
                        x, y = queue.popleft()
                        for dx, dy in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
                            nx, ny = x + dx, y + dy
                            if 0 <= nx and nx < m and 0 <= ny and ny < len(visited[0]) and not visited[nx][ny]:
                                queue.append((nx, ny))
                                visited[nx][ny] = True
                    cnt += 1
        return cnt


print(Solution().numIslands([["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], [
      "1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]))  # 1
