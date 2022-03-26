const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const n = Number(input[0].split(' '));

let dp = Array(n + 1).fill(0);

dp[2] = 3;

for (let i = 4; i <= n; i += 2) {
	dp[i] = dp[i - 2] * 3;
	for (let j = i - 4; j > 0; j -= 2) {
		dp[i] += dp[j] * 2;
	}
	// 특수한 경우 2가지
	dp[i] += 2;
}

console.log(dp[n]);
