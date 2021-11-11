const { count, timeStamp } = require('console');
const fs = require('fs');
const { isPrimitive } = require('util');
const { DefaultSerializer } = require('v8');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let n = Number(input[0].trim().split(' '));
// let arr = input[1].trim().split(' ').map(Number);

console.log(n);

function sol(n, arr) {
	function isPrime(x) {
		let flag = true;
		if (x < 2) return 0;
		for (let i = 2; i * i <= x; i++) {
			if (x % i === 0) flag = false;
		}
		if (flag) return 1;
		return 0;
	}

	let answer = 0;
	for (let i = 0; i < n; i++) {
		if (isPrime(arr[i])) answer++;
	}
	return answer;
}
console.log(sol(n, arr));
