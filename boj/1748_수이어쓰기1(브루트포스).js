const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')
	.map(Number);

let pow = 0;
let temp = 1;
while (temp < n) {
	temp *= 10;
	if (temp > n) break;
	pow += 1;
}

// 길이 * 개수
let len = 9;
let answer = 0;
for (let i = 1; i <= pow; i++) {
	answer += len * i;
	len *= 10;
}

answer += (pow + 1) * (n - Math.pow(10, pow) + 1);
console.log(answer);
