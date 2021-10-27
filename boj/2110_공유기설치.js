const { count } = require('console');
const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [n, m] = input[0].trim().split(' ').map(Number);
let arr = [];
for (let i = 1; i < input.length; i++) {
	arr.push(Number(input[i].trim()));
}

function solution(n, m, arr) {
	let answer = 0;
	arr.sort((a, b) => a - b);

	return answer;
}
console.log(solution(n, m, arr)); // 200
