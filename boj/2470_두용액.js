const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, last] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')
	.map((e) => e.trim());

const n = Number(first);
const arr = last.split(' ').map(Number);

function solution(n, arr) {
	arr.sort((a, b) => a - b);
	let left = 0,
		right = arr.length - 1;

	// 처음에 1e9로 했는데, 20억인 경우가 발생한다.
	let zero = 1e10;
	let xx = 0,
		yy = 0;

	while (left < right) {
		if (zero >= Math.abs(arr[left] + arr[right])) {
			xx = left;
			yy = right;
			zero = Math.abs(arr[left] + arr[right]);
			if (zero === 0) break;
		}

		let decreaseRightResult = Math.abs(arr[right - 1] + arr[left]);
		let increaseLeftResult = Math.abs(arr[right] + arr[left + 1]);
		if (decreaseRightResult > increaseLeftResult) left += 1;
		else right -= 1;
	}

	let answer = `${arr[xx]} ${arr[yy]}`;
	return answer;
}
console.log(solution(n, arr));
