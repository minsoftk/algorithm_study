const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, last] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const [n, k] = first.split(' ').map(Number);
const arr = last.split(' ').map(Number);

let left = 0,
	right = 1e9;
let lion = 0;
let minLength = 1e9;

// 첫번째, 라이언 left 결정
for (let i = 0; i < arr.length; i++) {
	if (arr[i] === 1) {
		left = i;
		break;
	}
}

// k개의 라이언 인형 개수를 만족하는 right 결정
for (i = left; i < arr.length; i++) {
	if (arr[i] === 1) {
		lion += 1;
	}
	if (lion === k) {
		right = i;
		break;
	}
}

// right가 1e9 라면 존재하지 않음
if (right === 1e9) {
	console.log(-1);
	return;
}

// 비교할 첫번째 연속된 인형들의 집합 크기
minLength = Math.min(minLength, right - left + 1);

// 다음 라이언 인형까지 left 증가, right도 다음 라이언을 만날 때까지 증가
while (right < arr.length) {
	left += 1;
	right += 1;
	while (arr[right] === 2) right += 1;
	if (right > arr.length - 1) break;

	while (arr[left] === 2) left += 1;
	minLength = Math.min(minLength, right - left + 1);
}
console.log(minLength);
