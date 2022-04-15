const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = fs
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');
const [n, m] = first.split(' ').map(Number);
// console.log(last);
const arr = last.map((e) => e.trim().split(' ').map(Number));
// console.log(n, m);
// console.log(arr);

function solution() {
	let graph = Array.from({ length: n + 1 }, () => Array());
	for (let [person, friend] of arr) {
		graph[person].push(friend);
		graph[friend].push(person);
	}

	let depth = 0;
	let check = Array(n + 1).fill(0);

	for (let idx = 0; idx < n; idx++) {
		check[idx] = 1;
		DFS(0, idx);
		check[idx] = 0;
	}
	return depth;

	function DFS(L, idx) {
		if (depth) return;
		if (L === 4) {
			depth = 1;
		} else {
			for (let i = 0; i < graph[idx].length; i++) {
				let val = graph[idx][i];
				if (!check[val]) {
					check[val] = 1;
					// console.log('idx', idx, 'graph[idx][i]', graph[idx][i]);
					DFS(L + 1, val);
					check[val] = 0;
				}
			}
		}
	}
}
console.log(solution());
