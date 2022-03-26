const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')[0];

let x = Number(input);

let left = 1,
	cnt = 0;
let sum = 0;
while (sum + left <= x) {
	sum += left;
	left += 1;
	cnt += 1;
}

console.log(cnt);
