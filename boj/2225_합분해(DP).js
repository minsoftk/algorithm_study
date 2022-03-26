const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const [n, k] = input[0].split(' ').map(Number);

// 왜 k+1, n+1로 하면 런타임 오류가 발생하지?
let dp = Array(201)
	.fill()
	.map((e) => Array(201).fill(0));

// i는 첫번째 정수의 값 j는 K번째에 올 수 있는 경우의 수
// 즉 dp[6][3] 은 맨 처음 정수가 6일 때, 3가지로 나올 수 있는 경우의 수
// 즉 정답은 dp[0][3] ~ dp[6][3] 까지의 합

// k가 1일 때는 전부 1
for (let i = 1; i < dp[0].length; i++) {
	dp[1][i] = 1;
}

for (let i = 1; i < dp[1].length; i++) {
	dp[2][i] = i + 1;
}

for (let i = 1; i < dp.length; i++) {
	dp[i][1] = i;
}

for (let i = 1; i < dp.length; i++) {
	for (let j = 2; j < dp[i].length; j++) {
		dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1e9;
	}
}

console.log(dp[k][n]);
