function solution(student, d, k) {
	function DFS(L, s, bit) {
		if (L === k) {
			let cnt = 0;
			for (let j = 0; j < len; j++) {
				if ((bit & st[j]) === st[j]) cnt++;
			}
			answer = Math.max(answer, cnt);
		} else {
			for (let i = s; i <= d; i++) {
				DFS(L + 1, i + 1, bit + pow[i]);
			}
		}
	}
	let pow = Array(d + 1).fill(0);
	let answer = 0;
	let len = student.length;
	let check = Array(len).fill(0);
	let st = Array(len).fill(0);

	pow[1] = 1;
	for (let i = 2; i <= d; i++) {
		pow[i] = pow[i - 1] * 2;
	}
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < student[i].length; j++) {
			st[i] += pow[student[i][j]];
		}
	}
	console.log(st);

	DFS(0, 1, 0);
	return answer;
}

console.log(
	solution([[1], [2, 3], [3], [1, 2], [], [2, 1], [2, 3, 4], [3, 4]], 4, 3)
); // 6
