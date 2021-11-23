function sol(x, y, arr) {
	let indegrees = new Array(n + 1).fill(0);
	let graph = Array(n + 1);
	for (let i = 0; i < graph[i].length; i++) {
		graph[i] = Array();
	}

	for (let [a, b, c] of arr) {
		graph[a].push([b, c]);
	}
	for (let i = 0; i < graph.length; i++) {
		for (let j = 0; j < graph[i].length; j++) {
			if (i <= 4 && j <= 4 && i === j) graph[i][j] = 1;
			else {
			}
		}
	}
}

console.log(
	sol(7, 8, [
		[5, 1, 2],
		[5, 2, 2],
		[7, 5, 2],
		[6, 5, 2],
		[6, 3, 3],
		[6, 4, 4],
		[7, 6, 3],
		[7, 4, 5],
	])
);

//1 16
// 2 16
// 3 9
// 4 17
