const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = fs
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

// console.log('here input', input);

const [n, m] = first.trim().split(' ').map(Number);

function solution(n, m) {
	function DFS(L, idx) {
		if (L === m) {
			console.log(...temp);
			return;
		} else {
			for (let i = idx; i <= n; i += 1) {
				temp.push(i);
				DFS(L + 1, i + 1);
				temp.pop();
			}
		}
	}

	// let check = Array(n + 1).fill(0);
	let temp = [];
	DFS(0, 1);
}

solution(n, m);
