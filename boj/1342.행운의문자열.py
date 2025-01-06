from itertools import permutations

S = input()
ans = 0

def fact(x):
	if x==0:
		return 1
	return fact(x-1) * x

for perm in permutations(S):
	ok = True
	for i in range(0, len(S) - 1):
		if (perm[i] == perm[i+1]):
			ok=False
			break
	ans+=ok

for i in range(ord('a'), ord('z') + 1):
	ans //= fact(S.count(chr(i)))

print(ans)