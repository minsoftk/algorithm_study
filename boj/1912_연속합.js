const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
	const [n, arr] = [+input[0], [0, ...input[1].split(' ').map(Number)]];

	const dp = Array(n + 1).fill(0);

	for (let i = 1; i <= n; i += 1) {
		dp[i] = Math.max(dp[i - 1], 0) + arr[i];
	}

	return Math.max(...dp.slice(1));
}

console.log(solution(input));
