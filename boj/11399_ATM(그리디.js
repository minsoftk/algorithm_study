const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0].trim());
let arr = input[1].split(' ').map(Number);
// console.log(n, arr);

arr.sort((a, b) => a - b);
// console.log(arr);

let sum = 0;
let res = 0;
for (let i = 0; i < n; i++) {
	sum += arr[i];
	res += sum;
}

console.log(res);
