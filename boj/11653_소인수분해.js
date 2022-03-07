const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = Number(
	fs.readFileSync(filePath).toString().trim().split('\n')[0]
);

let temp = input;
let n = 2;
while (temp > 1) {
	if (temp % n === 0) {
		console.log(n);
		temp /= n;
	} else {
		n += 1;
	}
}
