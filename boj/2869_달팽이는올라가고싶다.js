const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [input] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const [a, b, v] = input.split(' ').map((i) => +i);

day = Math.ceil((v - b) / (a - b));
console.log(day);
