const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [a, ...b] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = +a;
const arr = b.map((item) => item.split(' '));

let answer = 0;
for (let i = 1; i <= 9; i += 1) {
	for (let j = 1; j <= 9; j += 1) {
		for (let k = 1; k <= 9; k += 1) {
			if (i === j || i === k || j === k) continue;
			const num = '' + i + j + k;
			if (checkStrike(num)) {
				answer += 1;
			}
		}
	}
}

console.log(answer);

function checkStrike(answer) {
	let flag = true;
	for (let i = 0; i < arr.length; i += 1) {
		const [suggest, strike, ball] = arr[i];

		let strikeCnt = 0;
		let ballCnt = 0;
		// 스트라이크 판단
		for (let j = 0; j < 3; j += 1) {
			if (suggest[j] === answer[j]) {
				strikeCnt += 1;
			}
		}

		//볼 판단
		for (let j = 0; j < 3; j += 1) {
			for (let k = 0; k < 3; k += 1) {
				if (j === k) continue;
				if (suggest[j] === answer[k]) {
					ballCnt += 1;
				}
			}
		}

		if (ballCnt !== +ball || strikeCnt !== +strike) {
			flag = false;
			break;
		}
	}
	return flag;
}
