const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')
	.map((e) => e.trim());

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let sum = 0;
let cnt = 0;
// if (arr.length === 1 && arr[0] === m) {
// 	console.log(1);
// 	return;
// }

for (let left = 0; left < arr.length; left++) {
	let right = left + 1;
	sum = arr[left];

	while (arr[right] && sum + arr[right] <= m) {
		sum += arr[right];
		right += 1;
	}

	if (sum === m) {
		cnt += 1;
	}
}
console.log(cnt);
