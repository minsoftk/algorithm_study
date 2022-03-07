const fs = require('fs');
const { CLIENT_RENEG_LIMIT } = require('tls');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

const MID = 2;
const BIG = 3;

function solution() {
	let stack = [];
	let score = 0;
	// 시작부터 올바르지 않은 괄호
	for (let i = 0; i < input.length; i++) {
		if (i === 0 && (input[i] === ']' || input[i] === ')')) {
			return 0;
		}
		if (input[i] !== ']' && input[i] !== ')') {
			stack.push(input[i]);
		} else {
			// 계산된 숫자 집어넣어주기
			if (input[i] === ']' && stack[stack.length - 1] === '[') {
				stack.pop();
				stack.push(BIG);
			} else if (input[i] === ')' && stack[stack.length - 1] === '(') {
				stack.pop();
				stack.push(MID);
			} else {
				// stack의 마지막에 숫자인 경우 & 올바르지 않은 괄호 경우
				// 만약 type이 number일 경우, 연속된 number일 경우 더해준다.

				score = 0;
				if (typeof stack[stack.length - 1] === 'number') {
					while (typeof stack[stack.length - 1] === 'number') {
						score += stack.pop();
					}
				}

				// 반례 체크
				// console.log('here ', input[i], stack[stack.length - 1], score);
				if (input[i] === ')' && stack[stack.length - 1] === '[') return 0;
				if (input[i] === ']' && stack[stack.length - 1] === '(') return 0;
				if (stack.length === 0) return 0;
				if (input[i] === ')' && stack[stack.length - 1] === '(') {
					// 곱하기 연산
					stack.pop();
					score *= MID;
				} else if (input[i] === ']' && stack[stack.length - 1] === '[') {
					stack.pop();
					score *= BIG;
				}

				stack.push(score);
			}
		}
		// console.log('here ', score, stack);
	}

	// 올바르게 짝이 있을 경우만 생각함... 하나의 값이 나오지 않는다면 0을 return
	// 처음과 달리 마지막이 올바르지 않다면 문자열로 반환됨
	score = 0;
	for (let x of stack) score += x;
	if (typeof score === 'number') return score;
	else return 0;
}

console.log(solution());
