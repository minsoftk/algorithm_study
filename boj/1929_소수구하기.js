const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// console.log(input);
let [a, b] = input[0].trim().split(' ').map(Number);
// console.log(a, b);

let arr = [];
const sol = (a, b) => {
	for (let i = a; i <= b; i++) {
		let flag = true;
		for (let j = 2; j * j <= i; j++) {
			if (i % j === 0) {
				flag = false;
				break;
			}
		}
		if (i < 2) continue;
		if (flag) arr.push(i);
	}
	console.log(arr.join('\n'));
};

sol(a, b);
