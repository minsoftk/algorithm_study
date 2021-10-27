function solution(n, edges, k) {
	let answer;
	let graph = Array(n + 1);
	for (let i = 0; i < graph.length; i++) graph[i] = Array();
	let check = Array(n + 1).fill(0);
	let dist = Array(n + 1).fill(1e9);
	edges.forEach(([a, b, c]) => {
		graph[a].push([b, c]);
	});

	dist[1] = 0;
	for (let i = 1; i <= n; i++) {
		let min = 0;

		// min을 이용해서 찾아야하는 노드를 min에 입력
		for (let j = 1; j <= n; j++) {
			if (check[j] === 0 && dist[j] < dist[min]) min = j;
		}

		// min과 연결된 노드들 탐색
		for (let [next, cost] of graph[min]) {
			if (dist[min] + cost < dist[next]) {
				dist[next] = dist[min] + cost;
			}
		}
		check[min] = 1;
	}
	return dist[k];
}

console.log(
	solution(
		6,
		[
			[1, 2, 12],
			[1, 3, 4],
			[2, 1, 2],
			[2, 3, 5],
			[2, 5, 5],
			[3, 4, 5],
			[4, 2, 2],
			[4, 5, 5],
			[6, 4, 5],
		],
		5
	)
);
// 14
