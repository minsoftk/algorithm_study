// 자료는 정렬되어 있어야 한다.
// 절반으로 쪼개지기 때문에 log n이다.
function solution(n, edges, s, e) {
	function count(mid) {
		let cnt = 0;
		for (let i = 0; i < board.length; i++) {
			for (let j = 0; j < board.length; j++) {
				if (board[i][j] >= mid) cnt += m;
				else cnt += board[i][j];
			}
		}
		return cnt;
	}

	let answer = 0;
	let left = 1,
		right = 0;

	// let graph = Array(n + 1);
	let graph = Array.from(Array(n + 1), () => Array());

	for (let [a, b, c] of edges) {
		graph[a].push([b, c]);
		graph[b].push([a, c]);
		right = Math.max(right, c);
	}

	function BFS(w) {
		let check = Array.from(n + 1, () => Array());
		let queue = [];
		check[s] = 1;
		queue.push(s);
		while (queue.length) {
			let a = queue.shift();
			for (let [b, c] of graph[a]) {
				if (c >= w && check[b] === 0) {
					check[b] = 1;
					queue.push(b);
				}
			}
		}
		return check[e];
	}

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (count(mid) <= n) {
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
