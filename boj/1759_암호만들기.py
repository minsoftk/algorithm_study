# import sys

# sys.stdin = open("./input.txt", 'r')

# input_data = sys.stdin.readlines()
from itertools import combinations
moeum_arr = ['a', 'e', 'i', 'o', 'u']


# 방법 1
def combination(index, level, moeum, jaeum):
    if level == L:
        if moeum >= 1 and jaeum >= 2:
            for ch in arr:
                print(ch, end='')
            print()
        return

    for i in range(index, C):
        arr.append(password[i])
        is_moeum = password[i] in moeum_arr
        combination(i+1, level+1, moeum + 1 if is_moeum else moeum,
                    jaeum + 1 if not is_moeum else jaeum)
        arr.pop()


arr = []
[L, C] = map(int, input().split())
password = input().split()
password.sort()

# combination(0, 0, 0, 0)


# 방법 2 itertools를 사용하는 방법도 있음


def is_possible(word):
    global L, C, arr
    vow = 0
    for w in word:
        vow += (w in moeum_arr)
    con = L - vow
    return (vow >= 1 and con >= 2)


for word in combinations(password, L):
    if is_possible(word):
        print(''.join(word))
