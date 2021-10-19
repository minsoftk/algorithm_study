const fs = require('fs');
// ./boj/input.txt
let input = fs.readFileSync('./boj/input.txt').toString().trim().split(/\s/);

// let [n, m, ...arr] = fs
// 	.readFileSync('./boj/input.txt')
// 	.toString()
// 	.trim()
// 	.split(/\s/);
// arr.shift();

function solution(arr, m) {
	let left = 1,
		right = 10e15;
	function Count(mid) {
		let sum = 0;
		for (let x of arr) {
			if (x - mid > 0) sum += x - mid;
		}
		return sum;
	}

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		// m보다 작거나 같다면 나무를 너무 높게 잘랐다.
		if (Count(mid) <= m) {
			answer = mid;
			right = mid - 1;
		} else left = mid + 1;
	}
	return answer;
}
console.log(solution(arr, m));
