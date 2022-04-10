const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const [n, m] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);

function solution() {
	let answer = [];
	let temp = [];
	DFS(0, 0);

	function DFS(L, idx) {
		if (L === m) {
			answer.push(temp.join(' ').slice());
		} else {
			for (let i = 0; i < n; i++) {
				temp.push(arr[i]);
				DFS(L + 1, i + 1);
				temp.pop();
			}
		}
	}
	return answer.join('\n');
}

console.log(solution());
