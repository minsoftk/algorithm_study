# 미로탈출

```python
import sys
from collections import deque
sys.stdin = open("input.txt","r")
n,m=map(int,input().split())
board =[]
for i in range(n):
  board.append(list(map(int,sys.stdin.readline().rstrip())))
dx = [-1,1,0,0]
dy = [0,0,1,-1]

#BFS
def BFS(x,y):
  #Queue생성
  q = deque()
  q.append((x,y))

  while(q):
    x,y =q.popleft()
    #현재 위치에서 네방향 확인
    for i in range(4):
      xx=x+dx[i]
      yy=y+dy[i]
      if x < 0 and x > n or y < 0 and y > m:
        continue
      # 처음 방문하는 경우에만 최단거리 기록
      if board[xx][yy]==1:
        board[xx][yy] = board[x][y] + 1
        q.append((xx,yy))
  #가장 오른쪽 아래의 최단 거리
  return board[n-1][m-1]
print(BFS(0,0))
```
