const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const [n, q] = input[0].trim().split(' ').map(Number);
const num = input[1].trim().split(' ').map(Number);
const load = input.slice(2, n + 1).map((e) => e.trim().split(' ').map(Number));
const play = input
	.slice(n + 1, n + q + 1)
	.map((e) => e.trim().split(' ').map(Number));

function solution(n, q, num, load, play) {}

console.log(solution(n, q, num, load, play));
