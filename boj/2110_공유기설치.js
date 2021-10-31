const { count } = require('console');
const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [n, m] = input[0].trim().split(' ').map(Number);
let arr = [];
for (let i = 1; i < input.length; i++) {
	arr.push(Number(input[i].trim()));
}

function solution(n, m, arr) {
	function count(){

	}
// 0 3

	let answer = 1e9;
	let check = Array(n).fill(0);
	arr.sort((a, b) => a - b);

	// 거리를 기준으로 이분 탐색을 진행
	// 가능한 최대 거리가 right에 저장
	let left = 1,
		right = arr[n - 1] - arr[0];
	check[left] = 1;

	while (left <= right) {
		let mid = parseInt((left + right) / 2);
		let start = arr[0];

		for (let i = 0; i < n; i++) {
			let d = arr[i] - start;
			if (count(mid) >= m) {
				answer = mid;
				left = mid + 1;
			} else right = mid - 1;
		}
	}

	return answer;
}
console.log(solution(n, m, arr)); // 200
