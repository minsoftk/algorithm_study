const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
function solution(input) {
	const [n, m] = input[0].split(' ').map(Number);
	const located = input[1]
		.split(' ')
		.map(Number)
		.sort((a, b) => a - b);

	let result = [];

	const negative = located.filter((locate) => locate < 0).map((locate) => -locate);
	const positive = located.filter((locate) => locate >= 0).sort((a, b) => b - a);

	for (let i = 0; i < negative.length; i += m) {
		result.push(negative[i]);
	}

	for (let i = 0; i < positive.length; i += m) {
		result.push(positive[i]);
	}

	return result.reduce((acc, cur) => acc + cur, 0) * 2 - Math.max(...result);
}

console.log(solution(input));
