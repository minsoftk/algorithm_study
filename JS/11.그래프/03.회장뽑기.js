function solution(n, edges) {
	let answer = [];
	let dy = Array.from(Array(n + 1), () => Array(n + 1).fill(100));
	let dist = Array.from({ length: n + 1 }, () => 0);
	for (let i = 1; i <= n; i++) dy[i][i] = 0;
	for (let [a, b, c] of edges) {
		dy[a][b] = 1;
		dy[b][a] = 1;
	}
	for (let k = 1; k <= n; k++) {
		for (let i = 1; i <= n; i++) {
			for (let j = 1; j <= n; j++) {
				dy[i][j] = Math.min(dy[i][j], dy[i][k] + dy[k][j]);
			}
		}
	}
	let score = 100;
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			if (i === j) continue;
			dist[i] = Math.max(dist[i], dy[i][j]);
		}
		score = Math.min(score, dist[i]);
	}
	answer.push(score);
	let cnt = 0;
	for (let i = 1; i <= n; i++) {
		if (dist[i] === score) cnt++;
	}
	answer.push(cnt);
	return answer;
}

console.log(
	solution(5, [
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
		[2, 4],
		[5, 3],
	])
);
