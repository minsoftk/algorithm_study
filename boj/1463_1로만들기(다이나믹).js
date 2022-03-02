const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = Number(input[0]);
// console.log('here ', num);

function sol() {
	let dp = Array(num + 1).fill(-1);
	dp[1] = 0;
	for (let i = 2; i <= num; i++) {
		dp[i] = dp[i - 1] + 1;
		if (i % 3 === 0) {
			dp[i] = Math.min(dp[i], dp[parseInt(i / 3)] + 1);
		}
		if (i % 2 === 0) {
			dp[i] = Math.min(dp[i], dp[parseInt(i / 2)] + 1);
		}
	}
	console.log(dp[num]);
}

sol();
