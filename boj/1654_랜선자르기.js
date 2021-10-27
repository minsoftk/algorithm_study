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
	function count(mid) {
		let cnt = 0;
		for (let x of arr) {
			cnt += Math.floor(x / mid);
		}
		return cnt;
	}
	let answer = 0;
	let left = 1,
		right = 10e10;
	while (left <= right) {
		let mid = parseInt((left + right) / 2);
		if (count(mid) >= m) {
			answer = mid;
			left = mid + 1;
		} else right = mid - 1;
	}

	return answer;
}
console.log(solution(n, m, arr)); // 200
