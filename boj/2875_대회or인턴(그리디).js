const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, k, m] = input[0].split(' ').map(Number);
// console.log(n, k, m);

let answer = -1e9,
	temp = 0;
for (let i = 0; i <= m; i++) {
	if (n - i <= 1 || k - m + i < 1) temp = 0;
	else if (k - m + i === 1) temp = 2;
	else {
		let sum = n - i;
		let cnt = k - m + i;
		temp = 0;
		while (cnt) {
			if (sum >= 2) {
				sum -= 2;
				temp += 1;
			}
			cnt -= 1;
		}
	}
	answer = Math.max(temp, answer);
}
console.log(answer);
