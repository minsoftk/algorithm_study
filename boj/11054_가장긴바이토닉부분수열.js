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

function solution(n, arr) {
	let dy1 = Array(n).fill(0);
	let dy2 = Array(n).fill(0);
	let answer = 0;

	dy1[0] = 1;
	for (let i = 1; i < n; i++) {
		let max = 0;
		for (let j = i - 1; j >= 0; j--) {
			if (arr[j] < arr[i] && dy1[j] > max) {
				max = dy1[j];
			}
		}
		dy1[i] = max + 1;
	}
	console.log(dy1);
	// 거꾸로 dy를 탐색
	dy2[n - 1] = 1;
	for (let i = n - 2; i >= 0; i--) {
		let max = 0;
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[i] && dy2[j] > max) {
				max = dy2[j];
			}
		}
		dy2[i] = max + 1;
	}

	for (let i = 0; i < dy1.length; i++) {
		answer = Math.max(answer, dy1[i] + dy2[i]);
	}
	return answer - 1;
}

console.log(solution(n, arr)); // 7
// console.log(solution(10, [1, 5, 2, 1, 4, 3, 4, 5, 2, 1])); // 7

/*
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

*/
