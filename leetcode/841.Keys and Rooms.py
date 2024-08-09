from typing import List


class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        visited = [False for _ in rooms]

        def dfs(room_number):
            visited[room_number] = True

            for key in rooms[room_number]:
                if not visited[key]:
                    dfs(key)

        dfs(0)

        for result in visited:
            if result == False:
                return False

        return True


print(f"==>> canVisitAllRooms([[1], [2], [3], []]): {
      Solution().canVisitAllRooms([[1], [2], [3], []])}")

print(f"==>> canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]): {
      Solution().canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])}")
