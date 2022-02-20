const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
// console.log(input);
let n = Number(input[0]);
let arr = input.slice(1, n + 1).map(Number);
// console.log(n, arr);
arr.sort((a, b) => b - a);

let sum = 0;
let i = 1;
let plus_idx = 0,
	minus_idx = 1e9;
if (arr.length === 1) {
	sum += arr[0];
	console.log(sum);
	return;
}
let zero_cnt = 0;
for (let i = 0; i < arr.length; i++) {
	if (arr[i] >= 1) plus_idx = Math.max(plus_idx, i);
	if (arr[i] <= 0) minus_idx = Math.min(minus_idx, i);
	if (arr[i] === 0) zero_cnt += 1;
}
// console.log(plus_idx, minus_idx, zero_cnt);

for (let i = 0; i <= plus_idx; i += 2) {
	if (i + 1 <= plus_idx && arr[i + 1] >= 1) {
		if (arr[i] * arr[i + 1] > arr[i] + arr[i + 1]) sum += arr[i] * arr[i + 1];
		else sum += arr[i] + arr[i + 1];
	} else {
		sum += arr[i];
	}
}

for (let i = arr.length - 1; i >= minus_idx; i -= 2) {
	if (i - 1 >= 0 && arr[i - 1] <= 0) {
		if (arr[i] * arr[i - 1] > arr[i] + arr[i - 1]) sum += arr[i] * arr[i - 1];
		else sum += arr[i] + arr[i - 1];
	} else {
		sum += arr[i];
	}
}
console.log(sum);
