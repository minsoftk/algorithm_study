const memo: { [key: number]: number } = {
	1: 1,
	2: 2,
	3: 3,
};
function climbStairs(n: number): number {
	return dp(n);
}

function dp(n: number): number {
	if (n === 1) return 1;
	if (n === 2) return 2;
	if (memo[n]) return memo[n];
	return (memo[n] = dp(n - 1) + dp(n - 2));
}

console.log('🚀 ~ climbStairs ~ climbStairs:', climbStairs(3));
