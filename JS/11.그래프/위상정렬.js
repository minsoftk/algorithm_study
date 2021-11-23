function sol(arr) {
	let [n, m] = arr[0];
	let graph = Array(n + 1);
	for (let i = 0; i < graph.length; i++) graph[i] = Array();

	let indegrees = Array(n + 1).fill(0);

	for (let i = 1; i <= m; i++) {
		graph[arr[i][0]].push(arr[i][1]);
		indegrees[arr[i][1]]++;
	}

	let queue = [];
	let answer = [];

	for (let i = 1; i <= n + 1; i++) {
		if (indegrees[i] === 0) queue.push(i);
	}

	while (queue.length) {
		let front = queue.shift();
		answer.push(front);
		for (let x of graph[front]) {
			indegrees[x]--;
			if (indegrees[x] === 0) queue.push(x);
		}
	}
	return answer;
}

console.log(
	sol([
		[6, 6],
		[1, 4],
		[5, 4],
		[4, 3],
		[2, 5],
		[2, 3],
		[6, 2],
	])
);

//1 6 2 5 4 3
