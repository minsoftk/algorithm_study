const { count, timeStamp } = require('console');
const fs = require('fs');
const { DefaultSerializer } = require('v8');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let n = parseInt(input[0].trim());
let arr = '';
for (let i = 1; i < input.length; i++) {
	arr += input[i].trim().split(' ');
}
arr = arr.split(',').map(Number);
// console.log(m, n, k, arr);
// console.log(n, arr);

function solution(n, arr) {
	let answer = 0;

	// dy : i번까지의 연속된 수열의 개수를 저장한다.
	let dy = Array(n).fill(0);

	// 1번 idx부터 탐색
	dy[0] = 1;
	for (let i = 1; i < n; i++) {
		let max = 0;
		// 이전의 dy값중 최대값을 찾는다.
		for (let j = i - 1; j >= 0; j--) {
			if (arr[j] < arr[i]) max = Math.max(dy[j], max);
		}
		// 최대값에서 + 1을 해준다.
		dy[i] = max + 1;
	}
	// 최대값을 저장한다.
	answer = Math.max(...dy);
	return answer;
}
console.log(solution(n, arr));
// 4
