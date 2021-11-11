function solution(n, edges) {
	let answer = [];
	let check = Array(n + 1).fill(0);
	let len = edges.length;
	let graph = Array(len + 1); // 인접행렬 그래프 생성

	for (let i = 0; i < len; i++) {
		graph[i] = Array();
	}
	for (let [a, b] of edges) {
		graph[a].push(b);
		// graph[b].push(a) // 무방향
	}

	function DFS(L) {
		if (L === n) {
			answer++;
		} else {
			for (let i = 1; i < graph[L].length; i++) {
				if (check[graph[L][i]] === 0) {
					check[graph[L][i]] = 1;
					DFS(graph[L][i]);
					check[graph[L][i]] = 0;
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
); // 6
