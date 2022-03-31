const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const [n, k] = first.trim().split(' ').map(Number);
console.log('here ', last);

const arr = last.map((el) => el.trim().split(' ').map(Number));
console.log('here ', arr);

// const [first, ...edge] = require('fs')
// 	.readFileSync(filePath)
// 	.toString()
// 	.split('\n');

// const [N, M, V] = first.split(' ').map((i) => +i);
// const graph = Array(N + 1)
// 	.fill()
// 	.map((i) => []);
// if (edges[edges.length - 1] === '') {
// 	edges.pop();
// }
// // 2차원 인접 리스트 생성
// for (let edge of edges) {
// 	const [start, end] = edge.split(' ').map((i) => +i);

// 	graph[start].push(end);
// 	graph[end].push(start);
// }
// // 정렬(오름차순)
// for (let edge of graph) {
// 	edge.sort((a, b) => a - b);
// }
