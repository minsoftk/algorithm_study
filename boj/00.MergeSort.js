const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const num = first;
let arr = last.map((e) => +e.trim());
let temp = Array(arr.length).fill(0);

function merge(arr, left, right) {
	if (left >= right) return;

	let mid = parseInt((left + right) / 2);
	merge(arr, left, mid);
	merge(arr, mid + 1, right);

	let L = left;
	let R = mid + 1;
	let k = left;

	// 나눠진 배열들을 나열
	while (L <= mid && R <= right) {
		temp[k++] = arr[L] <= arr[R] ? arr[L++] : arr[R++];
	}

	while (L <= mid) temp[k++] = arr[L++];
	while (R <= right) temp[k++] = arr[R++];

	// 합쳐진 배열 arr에 입력하기
	for (let x = left; x <= right; x += 1) {
		arr[x] = temp[x];
	}
}

function solution(num, arr) {
	merge(arr, 0, num - 1);
	for (let x of arr) console.log(x);
}

solution(num, arr);
