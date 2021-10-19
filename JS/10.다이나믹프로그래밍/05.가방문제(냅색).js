// 계단 하나로 세분화 시킨다.
function solution(n) {
	let answer;
	let dy = Array(n + 1).fill(0);

	dy[1] = 1;
	dy[2] = 2;
	for (let i = 3; i <= n + 1; i++) {
		if (i === 3 || i === 5) {
			continue;
		} else dy[i] = dy[i - 2] + dy[i - 1];
	}
	answer = dy[n + 1];
	return answer;
}

console.log(
	solution(
		[
			[5, 12],
			[3, 8],
			[6, 14],
			[4, 7],
		],
		11
	)
); // 28
