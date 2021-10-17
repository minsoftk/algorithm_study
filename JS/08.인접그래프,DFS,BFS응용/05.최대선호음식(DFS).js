function solution(student, d, k) {
	let answer = 0;
	let len = student.length;
	let check = Array(len).fill(0);

	function DFS(L) {
		if (x < d && x <= k) {
			answer++;
		} else {
			for (let x of student[L]) {
				DFS(L + 1);
			}
		}
	}

	DFS(0);
	return answer;
}

console.log(
	solution([[1], [2, 3], [3], [1, 2], [], [2, 1], [2, 3, 4], [3, 4]], 4, 3)
); // 6
