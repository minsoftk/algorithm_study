const { count } = require('console');
const {
	SSL_OP_TLS_ROLLBACK_BUG,
	SSL_OP_NETSCAPE_CHALLENGE_BUG,
} = require('constants');
const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let n = input[0].trim().split(' ').map(Number);
let arr = [];
for (let i = 1; i < input.length; i++) {
	arr.push(input[i].trim());
}

// console.log(n, arr);

function solution(n, arr) {
	function isVPS(str) {
		let stack = [];
		let answer = 'YES';
		for (let x of str) {
			if (x === ')') {
				if (stack.length === 0) return 'NO';
				stack.pop();
			} else {
				stack.push(x);
			}
		}
		if (stack.length !== 0) answer = 'NO';
		return answer;
	}

	let answer = '';
	for (let i = 0; i < n; i++) {
		answer += isVPS(arr[i]);
		if (i !== n - 1) answer += '\n';
	}

	return answer;
}
console.log(solution(n, arr));
