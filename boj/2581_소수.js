const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [m, n] = input.map((elem) => +elem.trim());

function isPrime(x) {
	let flag = true;
	if (x < 2) return 0;
	for (let i = 2; i * i <= x; i++) {
		if (x % i === 0) flag = false;
	}
	if (flag) return 1;
	return 0;
}

let answer = [];
let total = 0;
for (let i = m; i <= n; i++) {
	if (isPrime(i)) {
		answer.push(i);
		total += i;
	}
}

if (!answer.length) console.log(-1);
else {
	console.log(total);
	console.log(answer[0]);
}
