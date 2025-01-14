const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
	const [N, M] = [input[0].length, input[1].length];
	const [s1, s2] = input.map((s) => ' ' + s);
	const dp = Array(N + 1)
		.fill(0)
		.map((item) => Array(M + 1).fill(0));

	for (let n = 1; n < N + 1; n += 1) {
		for (let m = 1; m < M + 1; m += 1) {
			if (s1[n] === s2[m]) {
				dp[n][m] = dp[n - 1][m - 1] + 1;
			} else {
				dp[n][m] = Math.max(dp[n][m - 1], dp[n - 1][m]);
			}
		}
	}

	return dp[N][M];
}

console.log(solution(input));
