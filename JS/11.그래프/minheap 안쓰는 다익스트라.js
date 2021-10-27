function solution(n, edges, end) {
	let graph = Array(n + 1);
	for (let i = 0; i < graph.length; i++) graph[i] = Array();
	let distances = Array(n + 1).fill(1e9);
	let checked = Array(n + 1).fill(0);

	// forEach는 배열 요소 각각에 대해서 실행한다.
	edges.forEach(([start, end, cost]) => graph[start].push([end, cost]));

	// 1부터 시작이므로 check
	distances[1] = 0;

	// n개의 노드만큼 실행해준다.
	for (let i = 1; i <= n; i++) {
		let min = 0;
		// 0번에 최대값을 이용해서 방문하지 않은 노드 번호를 min 값에 입력해준다.
		// 방문하지 않았고, dist의 값이 1e9보다 작으면 해당 노드에서 간선을 탐색한다.
		for (let j = 1; j <= n; j++) {
			if (checked[j] === 0 && distances[j] < distances[min]) min = j;
		}
		// 연결된 간선에 도달하는 비용을 저장해준다.
		for (let [next, cost] of graph[min]) {
			if (distances[min] + cost < distances[next])
				distances[next] = distances[min] + cost;
		}
		// 처리한 노드는 방문 체크를 해준다.
		checked[min] = 1;
	}
	return distances[end];
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
