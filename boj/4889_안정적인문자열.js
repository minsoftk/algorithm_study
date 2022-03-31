const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const isStable = (str) => {
	let stack = [];
	let cnt = 0;

	for (let i = 0; i < str.length; i++) {
		if (!stack.length && str[i] === '}') {
			cnt += 1;
			stack.push('{');
		} else {
			if (stack.length !== 0 && str[i] === '}') stack.pop();
			else stack.push('{');
		}
	}

	if (stack.length) cnt += stack.length / 2;
	return cnt;
};

function solution(input) {
	let answer;
	let str = '';

	answer = input.map((item, idx) => {
		item = item.trim();
		return `${idx + 1}. ${isStable(item)}`;
	});

	answer = answer.slice(0, answer.length - 1);

	for (let i = 0; i < answer.length; i++) {
		if (i === answer.length - 1) str += `${answer[i]}`;
		else str += `${answer[i]}\n`;
	}

	return str;
}
console.log(solution(input));
