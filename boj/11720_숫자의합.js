const { count, timeStamp } = require('console');
const fs = require('fs');
const { isPrimitive } = require('util');
const { DefaultSerializer } = require('v8');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0].trim().split(' '));
let arr = input[1].split('').map(Number);

function sol(n, arr) {
	let sum = 0;
	for (let x of arr) {
		if (x === 0) continue;
		else {
			sum += x;
		}
	}
	return sum;
}
console.log(sol(n, arr));
