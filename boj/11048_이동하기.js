const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
function solution(input) {
	const [n, m] = input[0].split(' ').map(Number);
	const map = input.slice(1).map((item) => item.split(' ').map(Number));
	const dp = map.slice((item) => item.slice());

	// 0행, 0열을 0으로 만들어준다면 초기화를 할 필요가 없다.
	for (let i = 1; i < m; i++) dp[0][i] = dp[0][i] + dp[0][i - 1];
	for (let i = 1; i < n; i++) dp[i][0] = dp[i][0] + dp[i - 1][0];

	// Bottom-Up
	for (let i = 1; i < n; i += 1) {
		for (let j = 1; j < m; j += 1) {
			dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + dp[i][j];
		}
	}

	return dp[n - 1][m - 1];

	// Top-Down
	// 0열, 0행을 0으로 초기화가 된 상태의 코드라 가정했을 때 아래와 같은 탑다운 방식 가능.
	// for (let i = 1; i < m; i++) dp[0][i] = dp[0][i] + dp[0][i - 1];
	// for (let i = 1; i < n; i++) dp[i][0] = dp[i][0] + dp[i - 1][0];

	// const dp2 = Array(n)
	// 	.fill(-1)
	// 	.map(() => Array(m).fill(-1));

	// function recursion(i, j) {
	// 	if (dp2[i][j] !== -1) return dp2[i][j];

	// 	dp2[i][j] = Math.max(recursion(i - 1, j), recursion(i, j - 1), recursion(i - 1, j - 1)) + map[i][j];
	// 	return dp2[i][j];
	// }

	// recursion(n - 1, m - 1);

	// console.log(dp2);
}

console.log(solution(input));
