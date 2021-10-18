function solution(s) {
	let answer = 0;
	let str = '';
	for (let i = 0; i < s[0].length; i++) {
		let hash = new Map();
		let flag = true;
		for (let j = 0; j < s.length; j++) {
			let temp = s[j].substring(0, i + 1);
			if (hash.hash(temp)) {
				flag = false;
				break;
			}
			hash.set(temp, 1);
		}
		if (flag) break;
	}
	return answer;
}

console.log(solution(['seeasue', 'sesseysu', 'semeas'])); // 3
console.log(solution(['ackky', 'kabck', 'yokkcs'])); // 1
console.log(solution(['longlong', 'longtong', 'longbig'])); // 5
