const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const WRONG = "Goldbach's conjecture is wrong.";
let MAX = -1e9;
let ans = 0;
// console.log(input);

for (let i = 0; i < input.length - 1; i++) {
	for (let j = input[i]; j >= 1; j--) {
		let flag = true;
		ans = 0;

		for (let k = 2; k * k <= input[i]; k++) {
			if (j <= 1 || input[i] - j <= 1) {
				flag = false;
			}

			// input[i] - j 에서는 k와 같은 경우가 존재하기 때문에 해당 경우를 생각해줘서 작성
			if (j % k === 0 || (input[i] - j > k && (input[i] - j) % k === 0)) {
				flag = false;
			}
		}

		if (flag) {
			ans = Math.max(ans, j);
			break;
		}
	}

	if (ans < 0) console.log(WRONG);
	else console.log(`${input[i]} = ${input[i] - ans} + ${ans}`);
}
