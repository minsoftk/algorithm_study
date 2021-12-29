const { count } = require('console');
const {
	SSL_OP_TLS_ROLLBACK_BUG,
	SSL_OP_NETSCAPE_CHALLENGE_BUG,
} = require('constants');
const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let s = input[0].trim();

let t = input[1].trim();

const solution = (s, t) => {
	let answer = 0;
	let len = t.length - s.length;
	for (let i = 0; i < len; i++) {
		if (t[t.length - 1] === 'A') {
			t = t.slice(0, t.length - 1);
		} else if (t[t.length - 1] === 'B') {
			t = t.slice(0, t.length - 1);
			t = t.split('').reverse().join('');
		}
	}
	if (s === t) answer = 1;

	return answer;
};

console.log(solution(s, t));
