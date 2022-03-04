const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, d, dishCnt, couponNum] = input[0].trim().split(' ').map(Number);

let arr = input.slice(1, 1 + n).map((elem) => Number(elem.trim()));

let menuKind = Array(d + 1).fill(0);
let answer = 0;
let couponFlag = false;

for (let i = 0; i < arr.length; i++) {
	cnt = 1;
	if (arr[i] === couponNum) couponFlag = true;
	// let temp = [arr[i]];
	for (let j = 1; j < dishCnt; j++) {
		menuKind[arr[i]] = 1;
		let val = arr[(i + j) % n];
		if (val === couponNum) couponFlag = true;
		if (menuKind[val] === 0) {
			cnt += 1;
			menuKind[val] = 1;
		}
		// temp.push(val);
	}

	cnt = couponFlag ? cnt : cnt + 1;

	answer = Math.max(answer, cnt);
	menuKind[i] = 0;
	couponFlag = false;

	for (let j = 0; j < dishCnt; j++) {
		let val = arr[(i + j) % n];
		menuKind[val] = 0;
	}
}
console.log(answer);
