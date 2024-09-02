const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
	if (n === 0) return 0;
	const arr = input.map(Number).sort((a, b) => a - b);
	const splitAverageNum = Math.round(n * 0.15);
	const num = n - splitAverageNum * 2;

	let answer = 0;
	for (let i = splitAverageNum; i < n - splitAverageNum; i += 1) {
		answer += arr[i];
	}

	return Math.round(answer / num);
}

console.log(solution(input));
