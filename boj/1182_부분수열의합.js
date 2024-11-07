const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [a, b] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, S] = a.split(' ').map(Number);
const arr = b.split(' ').map(Number);
let temp = [];
let answer = 0;

for (let i = 1; i < N + 1; i += 1) {
	temp = [];
	combination(0, 0, i);
}

function combination(index, level, base) {
	if (level === base) {
		if (temp.reduce((prev, cur) => prev + cur, 0) === S) answer += 1;
	}

	for (let i = index; i < N; i += 1) {
		temp.push(arr[i]);
		combination(i + 1, level + 1, base);
		temp.pop();
	}
}

console.log(answer);
