import sys

sys.stdin = open("./input.txt", 'r')
input_data = list(map(int, sys.stdin.readlines()))


def solution(input_data):
    answer = []
    for i in input_data:
        string = '-' * pow(3, i)
        answer.append(split_str(string))
    return '\n'.join(answer)
# print(solution(input_data))


def solution_update(input_data):
    def func(k):
        if k == 0:
            return '-'
        return func(k-1) + (' ' * (3 ** (k-1))) + func(k-1)

    for i in input_data:
        print(func(i))


print(solution_update(input_data))


def split_str(string):
    split_len = int(len(string) / 3)
    if len(string) < 3:
        return string

    left = split_str(string[0:int(split_len)])
    mid = ' ' * split_len
    right = split_str(string[len(string)-split_len:])

    return left+mid+right


# print(solution(input_data))
