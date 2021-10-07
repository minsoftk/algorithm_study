function solution(str) {
	let answer;
	let hash = new Map();
	for (let x of str) {
		hash.set(x, (hash.get(x) || 0) + 1);
	}
	let max = Number.MIN_SAFE_INTEGER;
	for (let [key, val] of hash) {
		if (val > max) {
			max = val;
			answer = key;
		}
	}
	return answer;
}
console.log(solution('BACBACCACCBDEDE'));
