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
	DFS(0, arr[0]);

	function DFS(L, val) {
		if (L === m) {
			answer.push(temp.join(' ').slice());
		} else {
			for (let i = 0; i < n; i++) {
				if (val <= arr[i]) {
					temp.push(arr[i]);
					DFS(L + 1, arr[i]);
					temp.pop();
				}
			}
		}
	}
	return answer.join('\n');
}

console.log(solution());
