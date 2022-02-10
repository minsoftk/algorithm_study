const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0]);

let arr = input
	.slice(1, n + 1)
	.map((item) => item.trim().split(' ').map(Number));

arr.sort((a, b) => {
	if (a[1] === b[1]) return a[0] - b[0];
	return a[1] - b[1];
});
console.log(arr);
let cnt = 1;
let [prevStart, prevEnd] = arr[0];
for (let i = 1; i < arr.length; i++) {
	let [start, end] = arr[i];
	if (prevEnd <= start) {
		cnt += 1;
		prevEnd = end;
	}
}
console.log(cnt);
