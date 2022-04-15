const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')
	.map(Number);

function solution(arr) {
	let answer = [];
	let cnt = 0;
	for (let x of arr) {
		cnt = 0;
		DFS(x, 0);
		answer.push(cnt);
	}
	return answer.join('\n');

	function DFS(x, sum) {
		if (sum > x) return;
		if (sum === x) cnt += 1;
		else {
			for (let i = 1; i <= 3; i++) {
				DFS(x, sum + i);
			}
		}
	}
}
console.log(solution(last));
