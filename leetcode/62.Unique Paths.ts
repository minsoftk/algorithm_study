function uniquePaths(m: number, n: number): number {
	const dp = Array(m)
		.fill(0)
		.map((x) => Array(n).fill(1));
	for (let i = 1; i < dp.length; i += 1) {
		for (let j = 1; j < dp[0].length; j += 1) {
			dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
		}
	}

	return dp[m - 1][n - 1];
}

console.log('🚀 ~ uniquePaths ~ uniquePaths:', uniquePaths(3, 7)); //28
