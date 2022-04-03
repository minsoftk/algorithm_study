const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

let n = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);
let arr = input[1].split(' ').map(Number);

// let [n, m, ...arr] = fs
// 	.readFileSync('./boj/input.txt')
// 	.toString()
// 	.trim()
// 	.split(/\s/);
// arr.shift();

// function solution(arr, m) {
// 	let answer = 0;
// 	let left = 1,
// 		right = 10e20;
// 	function count(mid) {
// 		let sum = 0;
// 		for (let x of arr) {
// 			if (x - mid > 0) sum += x - mid;
// 		}
// 		return sum;
// 	}

// 	while (left <= right) {
// 		let mid = Math.floor((left + right) / 2);
// 		// m보다 작거나 같다면 나무를 너무 높게 잘랐다.
// 		if (count(mid) >= m) {
// 			answer = mid;
// 			left = mid + 1;
// 		} else right = mid - 1;
// 	}
// 	return answer;
// }
// console.log(solution(arr, m));

function count(arr, mid) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > mid) {
			sum += arr[i] - mid;
		}
	}
	return sum;
}
function solution(n, m, arr) {
	arr.sort((a, b) => a - b);

	let left = 0,
		right = 20e10;
	let answer = 0;
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (count(arr, mid) >= m) {
			answer = mid;
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return answer;
}

console.log(solution(n, m, arr));
