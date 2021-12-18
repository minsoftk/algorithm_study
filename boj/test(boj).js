const { count } = require('console');
const {
	SSL_OP_TLS_ROLLBACK_BUG,
	SSL_OP_NETSCAPE_CHALLENGE_BUG,
} = require('constants');
const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0].split(' '));
let arr = input[1].split(' ').map(Number);

// console.log(n, arr);
function solution(n, arr) {
	let front_dy = Array(n).fill(0);
	let back_dy = Array(n).fill(0);
	front_dy[0] = 1;
	for (let i = 1; i < n; i++) {
		let max = 0;
		for (let j = i - 1; j >= 0; j--) {
			if (arr[j] < arr[i] && front_dy[j] > max) max = front_dy[j];
		}
		front_dy[i] = max + 1;
	}

	back_dy[n - 1] = 1;
	for (let i = n - 2; i >= 0; i--) {
		let max = 0;
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[i] && back_dy[j] > max) max = back_dy[j];
		}
		back_dy[i] = max + 1;
	}

	let answer = [];
	for (let i = 0; i < n; i++) {
		answer[i] = front_dy[i] + back_dy[i];
	}
	return Math.max(...answer) - 1;
}

console.log(solution(n, arr)); // 7
