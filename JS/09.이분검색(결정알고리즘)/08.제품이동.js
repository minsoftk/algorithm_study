// 자료는 정렬되어 있어야 한다.
// 절반으로 쪼개지기 때문에 log n이다.

function solution(n, edges, s, e) {
	function BFS(mid) {
		let check = Array(n + 1).fill(0);
		let queue = [];
		check[s] = 1;
		queue.push(s);
		while (queue.length) {
			// 만약 이미 check[e]에 도달했다면 BFS를 끝낸다.
			if (check[e]) return check[e];
			let a = queue.shift();
			for (let [b, c] of graph[a]) {
				if (c >= mid && check[b] === 0) {
					check[b] = 1;
					queue.push(b);
				}
			}
		}
		// e 지점의 check를 반환해준다. 도달했다면 1 도달하지 못했다면 0을 return
		return check[e];
	}

	let answer = 0;
	let graph = Array(n + 1);
	let left = 0,
		right = 0;
	for (let i = 0; i < graph.length; i++) graph[i] = Array();

	// 양방향 그래프
	for (let [a, b, c] of edges) {
		graph[a].push([b, c]);
		graph[b].push([a, c]);
		// 이분탐색을 위한 right, 최대 무게 c를 찾아서 넣어준다.
		right = Math.max(right, c);
	}

	// 이분탐색 시작
	while (left <= right) {
		let mid = Math.ceil((left + right) / 2);
		// BFS에 mid 값을 넣어줬을 때, e 지점에 도달한다면 true를 반환
		if (BFS(mid)) {
			answer = mid;
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return answer;
}
console.log(
	solution(
		5,
		[
			[1, 2, 5],
			[1, 3, 3],
			[1, 4, 2],
			[2, 4, 2],
			[3, 4, 4],
			[4, 5, 3],
		],
		1,
		5
	)
); // 3
