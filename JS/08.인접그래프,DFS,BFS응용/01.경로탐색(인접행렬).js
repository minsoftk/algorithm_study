function solution(n, edges) {
	let answer = 0;
	let check = Array(edges.length).fill(0);

	let edge = Array(edges.length);
	for (let i = 0; i < edges.length; i++) {
		edge[i] = Array(edges.length).fill(0);
	}
	for (let [x, y] of edges) {
		edge[x][y] = 1;
	}

	function DFS(L) {
		if (L === n) {
			answer++;
		} else {
			for (let i = 1; i <= edge.length; i++) {
				if (edge[L][i] === 1 && check[i] === 0) {
					check[i] = 1;
					DFS(i);
					check[i] = 0;
				}
			}
		}
	}

	check[1] = 1;
	DFS(1);
	return answer;
}

console.log(
	solution(5, [
		[1, 2],
		[1, 3],
		[1, 4],
		[2, 1],
		[2, 3],
		[2, 5],
		[3, 4],
		[4, 2],
		[4, 5],
	])
); // 5
