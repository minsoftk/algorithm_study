const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0].trim());
let state = input[1].trim().split('').map(Number);
let res = input[2].trim().split('').map(Number);
// console.log(n, state, res);

// 눌렀을 경우와 안눌렀을 경우를 나눠서 작성한다.
const sol = (n, state, res) => {
	let cnt = 0,
		Answer = 1e9,
		firstOnAnswer = 1e9;
	let firstState = [...state];
	firstState[0] = firstState[0] === 1 ? 0 : 1;
	firstState[1] = firstState[1] === 1 ? 0 : 1;

	for (let i = 1; i < n; i++) {
		if (state[i - 1] !== res[i - 1]) {
			convert(i, n, state);
			cnt += 1;
		}
		if (i === n - 1 && state[i] === res[i]) {
			Answer = cnt;
		}
	}

	cnt = 1;
	for (let i = 1; i < n; i++) {
		if (firstState[i - 1] !== res[i - 1]) {
			convert(i, n, firstState);
			cnt += 1;
		}
		// console.log(firstState, cnt);
		if (i === n - 1 && firstState[i] === res[i]) {
			firstOnAnswer = cnt;
		}
	}

	if (Answer === 1e9 && firstOnAnswer === 1e9) {
		console.log(-1);
	} else console.log(Math.min(Answer, firstOnAnswer));
};

const convert = (i, n, state) => {
	state[i] = state[i] === 1 ? 0 : 1;
	if (i === n - 1) state[n - 2] = state[n - 2] === 1 ? 0 : 1;
	else {
		state[i - 1] = state[i - 1] === 1 ? 0 : 1;
		state[i + 1] = state[i + 1] === 1 ? 0 : 1;
	}
};

sol(n, state, res);
