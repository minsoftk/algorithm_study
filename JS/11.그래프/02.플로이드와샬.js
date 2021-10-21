function solution(n, edges) {
	let answer = 0;
	let dy = Array.from(Array(n + 1), () => Array(n + 1).fill(1000));
	for (let i = 1; i <= n; i++) dy[i][i] = 0;
	for (let [a, b, c] of edges) {
		dy[a][b] = c;
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
			if (dy[i][j] === 1000) dy[i][j] = 'M';
		}
	}
	console.log(dy);
	return answer;
}

console.log(
	solution(5, [
		[1, 2, 6],
		[1, 3, 3],
		[3, 2, 2],
		[2, 4, 1],
		[2, 5, 13],
		[3, 4, 5],
		[4, 2, 3],
		[4, 5, 7],
	])
);
