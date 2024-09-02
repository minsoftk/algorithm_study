import sys


sys.stdin = open("./input.txt", 'r')
n = int(sys.stdin.readline())
input_data = list(map(int, sys.stdin.readlines()))


def round_decimal(num):
    return int(num) + (1 if num - int(num) >= 0.5 else 0)


def solution(input_data):
    if n == 0:
        return 0
    input_data.sort()
    split_average_num = round_decimal(n * 0.15)
    num = n - split_average_num * 2

    total = 0
    for i in range(split_average_num, n - split_average_num):
        total += input_data[i]
    return round_decimal(total / num)


print(solution(input_data))
