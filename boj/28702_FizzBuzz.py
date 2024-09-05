import sys

sys.stdin = open("./input.txt", 'r')
input_data = [l.strip() for l in sys.stdin.readlines()]


def solution(input_data):
    index = 0
    for idx, val in enumerate(input_data):
        if val != 'FizzBuzz' and val != 'Fizz' and val != 'Buzz':
            index = idx
    arr = [0, 0, 0]
    arr[index] = int(input_data[index])
    for i in range(index+1, 3):
        arr[i] = arr[i-1]+1

    last = arr[-1]+1
    if last % 3 == 0 and last % 5 == 0:
        return 'FizzBuzz'
    elif last % 3 == 0 and last % 5 != 0:
        return 'Fizz'
    elif last % 3 != 0 and last % 5 == 0:
        return 'Buzz'
    return last


print(solution(input_data))
