const { count } = require('console');
const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let n = Number(input[0].trim().split(' '));

let dice = [];
for (let i = 1; i <= n; i++) {
	let arr = input[i].split(' ').map(Number);
	dice.push(arr);
}

function solution(dice) {
	let answer = 0;
	let opposite = [5, 3, 4, 1, 2, 0];
	for (let i = 0; i < 6; i++) {
		let start = dice[0][i];
		let sum = 0,
			maxN = 0;
		for (let j = 0; j < dice.length; j++) {
			let side = dice[j].indexOf(start);
			let op = opposite[side];
			let end = dice[j][op];
			if (start !== 6 && end !== 6) maxN = 6;
			else if (start !== 5 && end !== 5) maxN = 5;
			else maxN = 4;
			sum += maxN;
			start = end;
		}
		answer = Math.max(answer, sum);
	}
	return answer;
}
console.log(solution(dice));
