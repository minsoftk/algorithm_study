const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);

const arr = [0, ...input[1].split(' ').map(Number)];
const costs = [0, ...input[2].split(' ').map(Number)];

function solution() {
	const dp = Array(101)
		.fill(0)
		.map(() => Array(10001).fill(0));

	for (let n = 1; n <= N; n += 1) {
		for (let c = 0; c < 10001; c += 1) {
			dp[n][c] = dp[n - 1][c];
			if (c - costs[n] >= 0) {
				dp[n][c] = Math.max(dp[n][c], dp[n - 1][c - costs[n]] + arr[n]);
			}
		}
	}

	let ans = 1e9;
	for (let i = 0; i < 10001; i += 1) {
		if (dp[N][i] >= M) {
			ans = Math.min(ans, i);
		}
	}

	return ans;
}

console.log(solution()); // 6
