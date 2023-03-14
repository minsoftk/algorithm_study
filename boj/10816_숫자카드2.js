const { chownSync } = require('fs');

const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, firstArr, last, lastArr] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const arr1 = firstArr.split(' ').map((e) => +e.trim());

const arr2 = lastArr.split(' ').map((e) => +e.trim());

const check = Array(20000001).fill(0);
for (let x of arr1) {
	if (x < 0) check[-1 * x + 10000000] += 1;
	else check[x] += 1;
}

let answer = [];
for (let x of arr2) {
	if (x < 0) answer.push(check[-1 * x + 10000000]);
	else answer.push(check[x]);
}
console.log(...answer);
