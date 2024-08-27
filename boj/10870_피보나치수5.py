import sys
# sys.stdin = open("./input.txt", 'r')

input_data = sys.stdin.readline()


def solution(input_data):
    n = int(input_data)
    memo = [0] * (n+1)

    def fibo(n):
        if n >= 2 and memo[n] > 0:
            return memo[n]
        if n == 1:
            return 1
        if n == 0:
            return 0
        memo[n] = fibo(n-1)+fibo(n-2)
        return memo[n]

    return fibo(n)


print(solution(input_data))
