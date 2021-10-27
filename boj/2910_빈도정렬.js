const { count } = require('console');
const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [n, m] = input[0].trim().split(' ').map(Number);
let temp = [];
for (let i = 1; i < input.length; i++) {
	temp.push(input[i].trim().split(' ').map(Number));
}
let arr = temp[0];
// console.log(n, m, arr);

function solution(n, m, arr) {
	let answer = '';
	let hash = new Map();
	for (let x of arr) {
		hash.set(x, (hash.get(x) || 0) + 1);
	}
	let temp = [...hash].sort((a, b) => {
		if (a[1] === b[1]) return;
		return b[1] - a[1];
	});
	for (let i = 0; i < temp.length; i++) {
		for (let j = 0; j < temp[i][1]; j++) {
			answer += temp[i][0];
			if (i !== temp.length - 1 || j !== temp[i][1] - 1) answer += ' ';
		}
	}
	return answer;
}
console.log(solution(n, m, arr));
