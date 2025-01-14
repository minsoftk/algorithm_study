const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
	const [N, K] = input[0].trim().split(' ').map(Number);
	const arr = input.slice(1).map((el) => el.trim().split(' ').map(Number));
	const W = [0, ...arr.map((el) => el[0])];
	const V = [0, ...arr.map((el) => el[1])];

	let dp = Array(N + 1)
		.fill()
		.map(() => Array(K + 1).fill(0)); //i kg을 담았을 때 최대가치, dy[m]이 답이 된다.

	for (let n = 1; n <= N; n += 1) {
		for (let k = 1; k <= K; k += 1) {
			dp[n][k] = dp[n - 1][k];
			if (k - W[n] >= 0) {
				dp[n][k] = Math.max(dp[n][k], dp[n - 1][k - W[n]] + V[n]);
			}
		}
	}
	return dp[N][K];
}

console.log(solution(input));
