// 다이나믹은 복잡한 문제를 직관적으로 알 수 있을 정도로 작게 만들어서 bottom-up으로 해결 한다. (점화식)
function solution(coin, m) {
	let answer = 0;

	let dy = Array(m + 1).fill(0); // i원을 만들 수 있는 경우의 수를 저장한다.
	dy[0] = 1;
	for (let x of coin) {
		for (let i = x; i <= m; i++) {
			dy[i] += dy[i - x];
		}
	}
	answer = dy[m];
	return answer;
}

console.log(solution([2, 3, 5], 10)); // 3
