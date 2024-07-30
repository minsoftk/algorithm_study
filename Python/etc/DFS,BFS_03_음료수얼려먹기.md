# 음료수 얼려먹기

## 영역을 묶어야 한다.

```python
import sys
sys.stdin = open("input.txt","r")
n,m=map(int,input().split())
board =[]
for i in range(n):
  board.append(list(map(int,input())))

dx = [1,0,-1,0]
dy = [0,1,0,-1]

def DFS(x, y):
  # 범위를 벗어날때
  if (x < 0 and x >= n) or (y < 0 and y >= m):
    return False
  #현재 노드를 아직 방문하지 않았을 때
  if board[x][y] == 0:
    board[x][y] = 1
    # 상하좌우
    DFS(x+1,y)
    DFS(x,y-1)
    DFS(x-1,y)
    DFS(x,y+1)
    return True
  return False

result = 0
for i in range(n):
  for j in range(m):
    if DFS(i,j) == True:
      result+=1

print(result)

```
