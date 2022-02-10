const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].trim().split(' ').map(Number);
// let arr = input
// 	.slice(1, n + 1)
// 	.map((item) => item.trim().split(' ').map(Number));
// console.log(arr);

let cnt = 0,
	res = 0;
while (n > 0) {
	if (n % m === 0) n /= m;
	else n -= 1;
	cnt++;
}
console.log(cnt);
