function solution(n, edges, end) {
	let answer = 0;
	let graph = Array.from(Array(n + 1), () => Array());
	let dist = Array(from({ length: n + 1 }, () => 1000));
	let ch = Array(n + 1).fill(0);
	for (let [a, b, c] of edges) {
		graph[a].push([b, c]);
	}

	/**  min Heap 쓰지 않는 다익스트라 **/
	dist[1] = 0;
	for (let i = 1; i <= n; i++) {
		let min = 0;
		for (let j = 1; j <= n; j++) {
			if (ch[j] === 0 && dist[j] < dist[min]) min = j;
		}
		ch[min] = 1;
		for (let next of graph[min]) {
			if (dist[min] + cost < dist[next]) {
				dist[next] = dist[min] + cost;
			}
		}
	}
	answer = dist[end];
	return answer;
}
console.log(
	solution(
		6,
		[1, 2, 3, 4, 5],
		[
			[1, 3, 6],
			[2, 2, 5],
			[1, 5, 2],
			[2, 3, 5],
		]
	)
); // [17, 12]
