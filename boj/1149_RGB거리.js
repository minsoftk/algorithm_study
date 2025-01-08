const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
function solution(input) {
	const n = +input[0];
	const costs = input.slice(1).map((item) => item.split(' ').map(Number));

	const dp = Array.from({ length: n }, () => Array(n).fill(0));

	for (let i = 0; i < n; i += 1) dp[0][i] = costs[0][i];

	let answer = 0;
	// 빨간색인 경우
	for (let i = 1; i < n; i += 1) {
		dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0];
		dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][1];
		dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][2];
	}

	return Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]);
}

console.log(solution(input));
