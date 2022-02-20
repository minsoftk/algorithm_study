const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = input[0].split(' ').map(Number);
// console.log(n);

let year = 1;
const E = 15;
const S = 28;
const M = 19;

while (true) {
	if ((year - E) % 15 === 0 && (year - S) % 28 === 0 && (year - M) % 19 === 0) {
		console.log(year);
		break;
	}
	year++;
}
