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
	let str = '';
	let answer = [];
	answer.push(str);
	answer.push('b');
	console.log(answer);
}

console.log(solution(n, arr)); // 7
