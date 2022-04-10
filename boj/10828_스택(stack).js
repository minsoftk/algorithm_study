const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const n = Number(first);
let arr = last.map((e) => e.trim().split(' '));

let stack = [];
let answer = [];
let top = 0;
for (let i = 0; i < arr.length; i++) {
	if (arr[i].length > 1) {
		stack.push(Number(arr[i][1]));
	} else {
		switch (arr[i][0]) {
			case 'top':
				if (stack.length === 0) answer.push(-1);
				else answer.push(stack[stack.length - 1]);
				break;
			case 'empty':
				if (stack.length === 0) answer.push(1);
				else answer.push(0);
				break;
			case 'size':
				answer.push(stack.length);
				break;
			case 'pop':
				if (stack.length === 0) {
					answer.push(-1);
					break;
				}
				answer.push(stack.pop());
				break;
		}
	}
}
console.log(answer.join('\n'));
