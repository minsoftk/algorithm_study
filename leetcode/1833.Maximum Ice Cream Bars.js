function sol(costs, coins) {
	costs.sort((a, b) => a - b);
	console.log(costs);
	let sum = 0,
		answer = 0;
	if (costs[0] > coins) return 0;
	for (let i = 0; i < costs.length; i++) {
		sum += costs[i];
		if (sum > coins) {
			break;
		}
		answer++;
	}
	return answer;
}
console.log(sol([1, 6, 3, 1, 2, 5], 20));
