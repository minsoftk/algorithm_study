const { count } = require('console');
const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, s] = input[0].trim().split(' ').map(Number);
let arr = input[1].trim().split(' ').map(Number);

function solution(n, s, arr) {
	let answer = 1e9;

	let left = 0,
		sum = 0;
	for (let right = 0; right < n; right++) {
		sum += arr[right];
		while (sum >= s && left <= right) {
			answer = Math.min(right - left + 1, answer);
			sum -= arr[left++];
		}
	}
	if (answer === 1e9) return 0;
	return answer;
}
console.log(solution(n, s, arr)); // 2
