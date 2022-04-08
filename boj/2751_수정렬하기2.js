const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const num = first;
let arr = last.map((e) => +e.trim());

function solution(num, arr) {
	arr.sort((a, b) => a - b);
	let answer = arr.join('\n');
	return answer;
}

console.log(solution(num, arr));
