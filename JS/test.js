// 오후 8시 20분 시작!

function solution(map) {
	let answer = [];
	let hash = new Map();
	for (let i = 0; i < map[0].length; i++) {
		hash.set(map[0][i], (hash.get(map[0][i]) || 0) + 1);
	}
	for (let i = 1; i < map.length; i++) {
		let hash2 = new Map();
		for (let j = 0; j < map[i].length; j++) {
			hash2.set(map[i][j], (hash2.get(map[i][j]) || 0) + 1);
		}

		for (let [key, val] of hash) {
			if (hash2.has(key)) {
				hash.set(key, Math.min(val, hash2.get(key)));
			} else hash.delete(key);
		}
	}
	for (let [key, val] of hash) {
		for (let i = 0; i < val; i++) {
			answer.push(key);
		}
	}
	return answer;
}

console.log(solution(['steasue', 'sasseysu', 'kseseas'])); // ["s", "s", "e", "a"]
console.log(solution(['ackky', 'kabck', 'yokkcs'])); // ["k", "k", "c"]
console.log(solution(['longlong', 'longtong', 'longbig'])); // ["l", "o", "n", "g", "g"]
