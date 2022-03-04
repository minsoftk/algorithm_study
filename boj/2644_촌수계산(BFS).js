const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0].trim());
let [a, b] = input[1].trim().split(' ').map(Number);
let m = Number(input[2].trim().split(' '));
let arr = input
	.slice(3, 3 + m)
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

let queue = [];
let check = Array(n + 1).fill(0);
check[a] = 1;
queue.push(a);
answer = BFS();
console.log(answer);

function BFS() {
	let L = 0;
	while (queue.length) {
		let len = queue.length;
		for (let i = 0; i < len; i++) {
			let front = queue.shift();
			for (let k = 0; k < graph[front].length; k++) {
				const next = graph[front][k];
				if (next === b) return L + 1;
				if (check[next]) continue;
				check[next] = 1;
				queue.push(graph[front][k]);
			}
		}
		L += 1;
	}
	return -1;
}
