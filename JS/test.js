function solution(arr) {
	let hash = new Map();

	for (let i = 0; i < arr[0].length; i++) {
		hash.set(arr[0][i], (hash.get(arr[0][i]) || 0) + 1);
	}

	for (let i = 1; i < arr.length; i++) {
		let hash2 = new Map();
		for (let j = 0; j < arr[i].length; j++) {
			hash2.set(arr[i][j], (hash2.get(arr[i][j]) || 0) + 1);
		}
		for (let [key, value] of hash) {
			hash.set(key, Math.min(value, hash2.get(key)) || 0);
		}
	}
	return arr;
}

console.log(solution(['steasue', 'sasseysu', 'kseseas']));
// console.log(solution(['ackky', 'kabck', 'yokkcs']));
// console.log(solution(['longlong', 'longtong', 'longbig']));
