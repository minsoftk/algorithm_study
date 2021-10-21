// 4번 학생보다 작은 학생은 4열이다.
// 4번 학생보다 큰 학생은 4행에 있다.
// 0보다 큰 숫자들만 찾아주면 된다.
function solution(n, compare) {
	let answer = 0;
	let dy = Array.from(Array(n + 1), () => Array(n + 1).fill(1e9));
	let Cnt = Array.from({ length: n + 1 }, () => 0);
	for (let [a, b] of compare) {
		dy[a][b] = 1;
	}
	for (let k = 1; k <= n; k++) {
		for (let i = 1; i <= n; i++) {
			for (let j = 1; j <= n; j++) {
				if (dy[i][j] > dy[i][k] + dy[k][j]) {
					dy[i][j] = dy[i][k] + dy[k][j];
				}
			}
		}
	}

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			if (dy[i][j] !== 1e9) {
				Cnt[i]++; //2번보다 큰게 다 있다.
				Cnt[j]++;
			}
		}
	}
	for (let i = 1; i <= n; i++) if (Cnt[i] === n - 1) answer++;
	return answer;
}
console.log(
	solution(6, [
		[1, 5],
		[3, 4],
		[5, 4],
		[4, 2],
		[4, 6],
		[5, 2],
	])
);
