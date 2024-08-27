const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
	const ans = [];

	const [a, b, c] = input;

	ans.push(+a + Number(b) - c);
	ans.push(a + String(b) - c);
	return ans.join('\n');
}

console.log(solution(input));
