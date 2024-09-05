const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
	const arr = [0, 0, 0];

	const index = input.findIndex((i) => !(i === 'Fizz' || i === 'Buzz' || i === 'FizzBuzz'));
	arr[index] = +input[index];
	for (let i = index + 1; i < input.length; i += 1) {
		arr[i] = arr[i - 1] + 1;
	}

	const last = arr[arr.length - 1] + 1;
	if (last % 3 === 0 && last % 5 === 0) return 'FizzBuzz';
	else if (last % 3 === 0 && last % 5 !== 0) return 'Fizz';
	else if (last % 3 !== 0 && last % 5 === 0) return 'Buzz';
	return last;
}

console.log(solution(input));
