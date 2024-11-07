from itertools import combinations

N, S = map(int, input().split())
arr = list(map(int, input().split()))
ans = 0

for i in range(1, N + 1):
    for comb in combinations(arr, i):
        print(f"==>> comb: {comb}")
        if sum(comb) == S:
            ans += 1

print(ans)
