function sol(costs, coins) {
	let answer = Array(k).fill(0);
	let hash = new Map();

	let temp = [];
	let set = new Set();
	for (let i = 0; i < logs.length; i++) {
		if (hash.has(logs[i][0])) {
			set = hash.get(logs[i][0]);
		}
		set.add(logs[i][1]);
		hash.set(logs[i][0], set);
	}

	for (let [key, val] of hash) {
		let size = val.size;
		console.log(size);
		answer[size - 1]++;
	}
	return answer;
}
console.log(sol([1, 6, 3, 1, 2, 5], 20));
