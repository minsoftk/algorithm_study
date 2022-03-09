const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

let cnt = Number(input[0]);

let a = 1,
	b = 0;
while (cnt--) {
	let nextA = 0,
		nextB = 0;
	if (a > 0) nextB = a;
	if (b > 0) {
		nextA += 1 * b;
		nextB += 1 * b;
	}
	a = nextA;
	b = nextB;
}

console.log(a, b);
