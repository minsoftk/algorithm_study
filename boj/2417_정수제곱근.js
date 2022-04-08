const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = +require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')[0];

let q = Math.ceil(Math.sqrt(input));
if (q * q >= input) {
	console.log(q);
} else {
	console.log(q + 1);
}
