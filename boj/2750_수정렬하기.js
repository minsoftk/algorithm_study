const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const num = first;
const arr = last.map((e) => +e.trim());

arr.sort((a, b) => a - b);

for (let x of arr) console.log(x);
