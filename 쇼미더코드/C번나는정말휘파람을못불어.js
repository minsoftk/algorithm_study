const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, last] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const n = Number(first);
const str = last;
console.log('here ', n, str);

const likeStr = ['W', 'H', 'E', 'E'];

function solution(n, str) {}

console.log(solution(n, str));
