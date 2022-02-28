const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// console.log('here input', input);

let n = input[0].trim().split('').map(Number);
let m = Number(input[1].split(' '));
let arr = [];

for (let i = 0; i < m; i++) {
	arr = input[2].trim().split(' ').map(Number);
}

// 사용가능한 리모컨 key 값
let key = Array.from({ length: 10 }, () => 1);

arr.forEach((item) => (key[item] = 0));

let high = 1e9,
	low = -1e9,
	nowChannel = 100;

let temp = [];
// console.log('here ', key);
let res = Number(n.join(''));
let stopFlag = false;

function DFS(L) {
	let num = 1e9;
	if (temp.length > 0) {
		num = Number(temp.join(''));
	}

	if (num <= res) {
		low = Math.max(low, num);
	}
	if (num > res) {
		high = Math.min(high, num);
		stopFlag = true;
	}
	if (L === n.length + 1) {
		return;
	} else {
		for (let i = 0; i < 10; i++) {
			// console.log('here ', key);

			if (key[i] === 1) {
				temp.push(i);
				DFS(L + 1);
				temp.pop();
			}
		}
	}
}

DFS(0);

// 시작 시점 계산을 빠뜨림

let start = Math.abs(100 - Number(n.join('')));
if (low < 0) {
	if (m === 0) console.log(n.length);
	else
		console.log(
			Math.min(high - res + high.toString().length, Math.abs(nowChannel - res))
		);
	return;
} else {
	let answer = Math.min(
		high - res + high.toString().length,
		res - low + low.toString().length,
		Math.abs(nowChannel - res)
	);

	console.log(answer);
}
