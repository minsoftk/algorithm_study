const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

function solution(n, a, b) {
	const sortedA = a.sort((a, b) => b - a);
	const sortedB = b.sort((a, b) => a - b);

	const result = sortedA.map((v, idx) => v * sortedB[idx]);
	return result.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(N, A, B));
