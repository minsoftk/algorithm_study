from itertools import permutations

N = int(input())

for permutation in permutations(range(1, N+1)):
    print(" ".join(map(str, permutation)))
