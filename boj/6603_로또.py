import sys

sys.stdin = open("./input.txt", 'r')

input_data = sys.stdin.readlines()


def combination(index, level):
    global arr, result, k
    if level == 6:
        print(' '.join(map(str, arr)))
        return

    for i in range(index, k):
        arr.append(s[i])
        combination(i+1, level+1)
        arr.pop()


result = []

for array in input_data:
    arr = []
    data = list(map(int, array.split()))
    k = data[0]
    s = data[1:]

    if data[0] == 0:
        break

    combination(0, 0)
    print()
