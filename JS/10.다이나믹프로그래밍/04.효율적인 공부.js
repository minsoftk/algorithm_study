// 계단 하나로 세분화 시킨다.
function solution(times, r) {
	let answer = 0;
	let m = times.length;
	let dy = Array(m).fill(0);

	times.sort((a, b) => a[1] - b[1]);
	for (let i = 0; i < m; i++) {
		dy[i] = times[i][2];
		for (let j = i - 1; j >= 0; j--) {
			if (times[j][1] + r <= times[i][0] && dy[j] + times[i][2] > dy[i]) {
				dy[i] = dy[j] + times[i][2];
			}
		}
		answer = Math.max(answer, dy[i]);
	}
	return answer;
}

console.log(
	solution(
		[
			[3, 5, 20],
			[4, 7, 16],
			[1, 2, 5],
			[11, 13, 7],
			[9, 10, 6],
		],
		2
	)
); // 28
