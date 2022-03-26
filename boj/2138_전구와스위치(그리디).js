const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0].trim());
let state = input[1].trim().split('').map(Number);
let res = input[2].trim().split('').map(Number);
console.log(n, state, res);

// 눌렀을 경우와 안눌렀을 경우를 나눠서 작성한다.
const sol = (n, state, res) => {
	let cnt = 0,
		Answer = 1e9,
		firstStateAnswer = 1e9;
	let firstState = [...state];

	// 꺼졌을 때의, state를 firstState저장
	// 0 0 0
	// 1 1 0
	firstState[0] = firstState[0] === 1 ? 0 : 1;
	firstState[1] = firstState[1] === 1 ? 0 : 1;

	// 입력받았을 때의 경우를 그대로 convert를 통해서 연산, 횟수 세기
	for (let i = 1; i < n; i++) {
		if (state[i - 1] !== res[i - 1]) {
			convert(i, n, state);
			cnt += 1;
		}
		// 마지막 경우일 때, 같다면 Answer에 저장
		if (i === n - 1 && state[i] === res[i]) {
			Answer = cnt;
		}
	}

	// 횟수 초기화
	cnt = 1;
	// 처음에 다른 경우가 저장된 firstState를 이용해 똑같이 횟수 세기
	for (let i = 1; i < n; i++) {
		if (firstState[i - 1] !== res[i - 1]) {
			convert(i, n, firstState);
			cnt += 1;
		}
		// console.log(firstState, cnt);

		// 다른 경우의 정답 횟수를 저장
		if (i === n - 1 && firstState[i] === res[i]) {
			firstStateAnswer = cnt;
		}
	}

	// 만약 할당이 되지 않았다면 -1을 출력
	if (Answer === 1e9 && firstStateAnswer === 1e9) {
		console.log(-1);
	} else console.log(Math.min(Answer, firstStateAnswer));
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
