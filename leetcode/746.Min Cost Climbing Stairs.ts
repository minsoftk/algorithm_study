function minCostClimbingStairs(cost: number[]): number {
	const dp: number[] = [];
	[dp[0], dp[1]] = [cost[0], cost[1]];

	for (let i = 2; i <= cost.length; i += 1) {
		if (i === cost.length) {
			dp[i] = Math.min(dp[i - 2] + 0, dp[i - 1] + 0);
		} else {
			dp[i] = Math.min(dp[i - 2] + cost[i], dp[i - 1] + cost[i]);
		}
	}

	return dp[dp.length - 1];
}
console.log('🚀 ~ minCostClimbingStairs ~ minCostClimbingStairs:', minCostClimbingStairs([10, 15, 20]));
