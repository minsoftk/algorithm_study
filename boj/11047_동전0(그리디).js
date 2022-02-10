const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map((item) => item.trim());

let [n, k] = input[0].split(' ').map(Number);
// console.log(n, k);

let coins = input.slice(1, n + 1).map(Number);
// console.log(coins);

let cnt = 0;
for (let i = coins.length - 1; i >= 0; i--) {
	while (k >= coins[i]) {
		cnt += Math.floor(k / coins[i]);
		k %= coins[i];
	}
}
console.log(cnt);
