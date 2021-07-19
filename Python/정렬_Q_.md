# 위에서 아래로

```python
import sys
sys.stdin = open("input.txt","r")
n=int(input())
data=[]
for i in range(n):
  data.append(int(input()))

data.sort(reverse=True)
print(data)
```

# 성적이 낮은 순서로 학생 출력하기

```python
import sys
sys.stdin = open("input.txt","r")

n = int(input())
data=[]
for i in range(n):
  temp = input().split()
  data.append((temp[0],int(temp[1])))
print(data)
# key를 이용해 성적이 낮은 학생 choice
data = sorted(data, key= lambda x: x[1])
for x in data:
  print(x[0],end =' ')
```

# 두 배열의 원소 교체

- b는 내림차순 정렬을 했으면 더욱 간편하게 할 수 있었다.

```python
import sys
sys.stdin = open("input.txt","r")

n,k = list(map(int,input().split()))
a=list(map(int,input().split()))
b=list(map(int,input().split()))

a.sort()
b.sort()
print(a,"  ",b)
for i in range(0,k):
    a[i],b[n-1-i] = b[n-1-i],a[i]

print(sum(a))
```
