function solution(s) {
	let hash = new Map();
	for (let x of s[0]) {
		hash.set(x, (hash.get(x) || 0) + 1);
	}

	for (let i = 1; i < s.length; i++) {
		let hash2 = new Map();

		for (let x of s[i]) {
			hash2.set(x, (hash2.get(x) || 0) + 1);
		}

		for (let [key, val] of hash) {
			hash.set(key, Math.min(val, hash2.get(key)));
		}
	}
	let arr = [];
	for (let [key, val] of hash) {
		for (let i = 0; i < val; i++) arr.push(key);
	}
	return arr;
}

console.log(solution(['steasue', 'sasseysu', 'kseseas']));
// console.log(solution(['ackky', 'kabck', 'yokkcs']));
// console.log(solution(['longlong', 'longtong', 'longbig']));
