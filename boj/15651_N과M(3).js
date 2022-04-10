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
	DFS(0);

	function DFS(L) {
		if (L === m) {
			answer.push(temp.join(' ').slice());
		} else {
			for (let i = 1; i <= n; i++) {
				temp.push(i);
				DFS(L + 1);
				temp.pop();
			}
		}
	}
	return answer.join('\n');
}

console.log(solution());
