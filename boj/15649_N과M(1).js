const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')[0];

const [n, m] = input.split(' ').map(Number);

function solution() {
	let answer = [];
	let temp = [];
	let check = Array(n + 1).fill(0);
	DFS(0);

	function DFS(L) {
		if (L === m) {
			console.log(temp.join(' '));
		} else {
			for (let i = 1; i <= n; i++) {
				if (check[i] === 0) {
					check[i] = 1;
					temp.push(i);
					DFS(L + 1);
					check[i] = 0;
					temp.pop();
				}
			}
		}
	}
}
solution();
