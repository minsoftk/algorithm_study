const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

/**
 * 첫번째 솔루션 탑다운 방식
 * @param {} input
 * @returns
 */
function solution(input) {
	return input
		.map((i) => {
			const arr = new Array(Math.pow(3, i)).fill('-');
			return splitStr(arr);
		})
		.join('\n');
	function splitStr(str) {
		if (str.length < 3) return str.join('');
		const len = str.length / 3;
		const left = splitStr(str.slice(0, len));
		const mid = Array(len).fill(' ').join('');
		const right = splitStr(str.slice(str.length - len, str.length));

		return left + mid + right;
	}
}

/**
 * 첫번째 솔루션 수정본
 * @param {} input
 * @returns
 */
function solutionUpdate(input) {
	return input
		.map((i) => {
			return split(i);
		})
		.join('\n');
	function split(i) {
		if (i === 0) return '-';
		return (
			split(i - 1) +
			Array(Math.pow(3, i - 1))
				.fill(' ')
				.join('') +
			split(i - 1)
		);
	}
}

console.log(solutionUpdate(input));

/**
 * 2번째 방식
 * 바텀업 방식
 * @param {} input
 * @returns
 */
function solution2(input) {
	const arr = Array(12).fill(' ');
	arr[0] = '-';

	for (let i = 1; i < input.length; i += 1) {
		arr[i] =
			arr[i - 1] +
			Array(Math.pow(3, i - 1))
				.fill(' ')
				.join('') +
			arr[i - 1];
	}

	return input.map((i) => arr[i]).join('\n');
}

// console.log(solution2(input));
