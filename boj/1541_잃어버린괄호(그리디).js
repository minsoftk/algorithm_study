const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = input[0];
let num = [];
const DEGIT = 10;
let temp = 0;
for (let i = 0; i < arr.length; i++) {
	if (arr[i] !== '-' && arr[i] !== '+') {
		if (i >= 1 && arr[i - 1] !== '-' && arr[i - 1] !== '+') {
			temp = Number(temp) * DEGIT + Number(arr[i]);
		} else temp = Number(arr[i]);
	} else {
		num.push(temp);
		num.push(arr[i]);
		temp = 0;
	}
	if (i === arr.length - 1) num.push(temp);
}

// console.log(num);
let flag = 'p';
let sum = num[0];
for (let i = 1; i < num.length; i++) {
	if (num[i - 1] === '+') {
		if (flag === 'm') sum -= num[i];
		else sum += num[i];
	} else if (num[i - 1] === '-') {
		flag = 'm';
		sum -= num[i];
	}
	// console.log(num[i]);
}

console.log(sum);
