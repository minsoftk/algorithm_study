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

	// dy : i번까지의 넣을 수 있는 최대의 상자 개수를 저장
	let dy = Array(n).fill(0);
	dy[0] = 1; // 상자가 하나이므로 1로 시작한다.
	// 입력된 배열을 탐색한다.
	for (let i = 1; i < n; i++) {
		let max = 0;
		// 이전 값들중 arr[i] 값보다 작으면서, 최대 dy값을 찾는다.
		for (let j = i - 1; j >= 0; j--) {
			if (arr[j] < arr[i]) {
				max = Math.max(max, dy[j]);
			}
		}
		// 최대 dy값에 + 1을 해준다.
		dy[i] = max + 1;
	}
	answer = Math.max(...dy);
	return answer;
}
console.log(solution(n, arr));
// 4
