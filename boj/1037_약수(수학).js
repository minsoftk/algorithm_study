const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// console.log(input);
let n = Number(input[0].trim());

let arr = input[1].trim().split(' ').map(Number);
// console.log(n, arr);

let left = 0,
	right = 0,
	num = 0;

arr.sort((a, b) => a - b);

while (1) {
	num = arr[left] * arr[right];
	let flag = true;
	for (let i = 0; i < arr.length; i++) {
		if (!(num > arr[i] && num % arr[i] === 0)) {
			right += 1;
			flag = false;
			break;
		}
	}
	if (flag) break;
}

console.log(num);
