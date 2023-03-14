const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = input[0].split('').map(Number);

n.sort((a, b) => a - b);

if (n[0] === 0) {
	let num = '';
	let sum = 0;
	for (let i = n.length - 1; i >= 0; i--) {
		num += n[i].toString();
		sum += n[i];
	}
	if (sum % 3 === 0) console.log(num);
	else console.log(-1);
} else console.log(-1);
