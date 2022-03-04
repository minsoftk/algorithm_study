const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m, r] = input[0].trim().split(' ').map(Number);

let arr = [];
for (let i = 1; i < 1 + n; i++) {
	let temp = input
		.slice(i, i + 1)[0]
		.trim()
		.split(' ')
		.map(Number);
	arr.push(temp);
}

let nn = n,
	mm = m,
	array_cnt = 0;

while (nn > 0 && mm > 0) {
	nn -= 2;
	mm -= 2;
	array_cnt += 1;
}

nn = n;
mm = m;
let maps = Array(array_cnt);
let arrayCount = Array(array_cnt);
for (let i = 0; i < array_cnt; i++) {
	maps[i] = Array(nn * mm - (nn - 2) * (mm - 2)).fill(0);
	arrayCount[i] = nn * mm - (nn - 2) * (mm - 2);
	nn -= 2;
	mm -= 2;
}

// 배열에 입력
nn = n;
mm = m;
let r_start = 0,
	r_end = n - 1;
let c_start = 0,
	c_end = m - 1;

for (let k = 0; k < array_cnt; k++) {
	let len = arrayCount[k];
	for (let i = r_start; i <= r_end; i++) {
		for (let j = c_start; j <= c_end; j++) {
			if (i === r_start) {
				maps[k][i + j - r_start - c_start] = arr[i][j];
			} else if (i === r_end) {
				maps[k][nn + mm - 2 - k + j] = arr[i][c_end - j + k];
			} else {
				if (i > r_start && i < r_end && j === c_start) {
					maps[k][len - i + k] = arr[i][j];
				} else if (i > r_start && i < r_end && j === c_end) {
					maps[k][mm - 1 - k + i] = arr[i][j];
				}
			}
		}
	}

	r_start += 1;
	r_end -= 1;
	c_start += 1;
	c_end -= 1;
	nn -= 2;
	mm -= 2;
}

while (r--) {
	for (let i = 0; i < maps.length; i++) {
		let temp = maps[i].shift();
		maps[i].push(temp);
	}
}

nn = n;
mm = m;
r_start = 0;
r_end = n - 1;
c_start = 0;
c_end = m - 1;

let answer = Array(n);
for (let i = 0; i < n; i++) answer[i] = Array(m).fill(0);
let a = 0,
	b = 0;

// console.log('here ', maps);

for (let i = 0; i < maps.length; i++) {
	for (let j = 0; j < maps[i].length; j++) {
		answer[a][b] = maps[i][j];
		if (a === r_start && b < c_end) {
			b += 1;
		} else if (b === c_end && a < r_end) {
			a += 1;
		} else if (a === r_end && b > c_start) {
			b -= 1;
		} else if (b === c_start && a > r_start) {
			a -= 1;
		}
	}
	a += 1;
	b += 1;
	r_start += 1;
	r_end -= 1;
	c_start += 1;
	c_end -= 1;
}

for (let i = 0; i < answer.length; i++) {
	console.log(...answer[i]);
}
