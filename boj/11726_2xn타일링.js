const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

function solution(n) {
	const dp = Array(n + 1).fill(0);
	[dp[1], dp[2]] = [1, 2];

	for (let i = 3; i <= n; i += 1) {
		dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
	}

	return dp[n];
}

console.log(solution(+input)); // 2
