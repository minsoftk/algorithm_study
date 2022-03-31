const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const n = first.trim().split(' ').map(Number)[0];
let state = last.map((e) => e.trim())[0].split('');

state = state.map((e) => {
	if (e !== '+' && e !== '-' && e !== '*') return Number(e);
	else return e;
});

// 괄호로 묶는 경우, 안 묶는 경우
function cal(a, b, oper) {
	let result = a;
	switch (oper) {
		case '+':
			result += b;
			break;
		case '-':
			result -= b;
			break;
		case '*':
			result *= b;
			break;
	}
	return result;
}

function DFS(idx, res) {
	if (idx > n - 1) {
		max_cal = Math.max(max_cal, res);
		return;
	}
	let oper = idx === 0 ? '+' : state[idx - 1];
	if (idx + 2 < n) {
		// (1*2) * 4 의 경우
		let bracket = cal(state[idx], state[idx + 2], state[idx + 1]);
		DFS(idx + 4, cal(res, bracket, oper));
	}
	// 괄호가 없는 경우
	DFS(idx + 2, cal(res, state[idx], oper));
}

let max_cal = -1e10;
function solution(n, state) {
	DFS(0, 0);
	return max_cal;

	// for (let i = 0; i < state.length; i++) {
	// 	if (
	// 		i + 3 <= state.length - 1 &&
	// 		state[i - 2] !== '-' &&
	// 		state[i] === '*' &&
	// 		state[i + 2] === '+'
	// 	) {
	// 		let temp = state[i + 1] + state[i + 3];
	// 		state.splice(i + 1, 3, temp);
	// 	} else if (
	// 		i + 3 <= state.length - 1 &&
	// 		state[i] === '-' &&
	// 		state[i + 2] === '-'
	// 	) {
	// 		let temp = state[i + 1] - state[i + 3];
	// 		if (temp < 0) state.splice(i + 1, 3, temp);
	// 	} else if (
	// 		i + 7 <= state.length - 1 &&
	// 		state[i] !== '-' &&
	// 		state[i + 2] === '-' &&
	// 		state[i + 4] === '*' &&
	// 		state[i + 6] === '-'
	// 	) {
	// 		let temp = state[i + 1] - state[i + 3];
	// 		let temp2 = state[i + 5] - state[i + 7];
	// 		// console.log(temp, temp2);
	// 		if (temp < 0 && temp2 < 0) {
	// 			state.splice(i + 1, 7, temp * temp2);
	// 		}
	// 	}
	// 	// console.log('here ', state);
	// }

	// let res = state[0];
	// for (let i = 0; i < state.length; i += 2) {
	// 	if (state[i + 1] === '+') res += state[i + 2];
	// 	else if (state[i + 1] === '*') res *= state[i + 2];
	// 	else if (state[i + 1] === '-') {
	// 		if (state[i + 2] < 0) {
	// 			res += -state[i + 2];
	// 		} else res -= state[i + 2];
	// 	}
	// }
	// return res;
}

console.log(solution(n, state));
