const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m, v] = input[0].trim().split(' ').map(Number);

const arr = input
	.slice(1, 1 + m)
	.map((elem) => elem.trim().split(' ').map(Number));

let graph = Array(n + 1);
for (let i = 0; i < graph.length; i++) {
	graph[i] = new Array();
}

for (let i = 0; i < arr.length; i++) {
	let [x, y] = arr[i];
	graph[x].push(y);
	graph[y].push(x);
}

for (let i = 0; i < graph.length; i++) {
	graph[i].sort((a, b) => a - b);
}

function solution() {
	const dfs = [];
	const bfs = [];
	const queue = [];

	let checkDFS = Array(n + 1).fill(0);
	DFS(v);

	let checkBFS = Array(n + 1).fill(0);
	BFS(v);

	console.log(dfs.join(' '));
	console.log(bfs.join(' '));
	return;

	function DFS(v) {
		checkDFS[v] = 1;
		dfs.push(v);

		for (let i = 0; i < graph[v].length; i++) {
			const next = graph[v][i];
			if (next && checkDFS[next] === 0) {
				DFS(next);
			}
		}
	}

	function BFS(v) {
		checkBFS[v] = 1;
		queue.push(v);
		while (queue.length) {
			let front = queue.shift();
			bfs.push(front);
			for (j = 0; j < graph[front].length; j++) {
				const next = graph[front][j];
				if (checkBFS[next] === 0) {
					checkBFS[graph[front][j]] = 1;
					queue.push(graph[front][j]); //3
				}
			}
		}
	}
}

solution();
