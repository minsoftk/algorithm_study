let input = require('fs')
	.readFileSync('./boj/input.txt')
	.toString()
	.split('\n');
let first = input[0].trim().split(' ');
let n = Number(first[0]);
let k = Number(first[1]);
let arr = input[1].trim().split(' ').map(Number);

function solution(arr, n, k) {
	let answer = 1e9;
	let left = 0;

	// 라이언 1  어피치 2, 라이언 k개
	let cnt = 0; // 라이언을 세는 변수
	for (let right = 0; right < n; right++) {
		if (arr[right] === 1) cnt++;
		if (cnt >= k) answer = Math.min(answer, right - left + 1);
		while (cnt >= k) {
			if (arr[left] === 1) {
				if (cnt === k) answer = Math.min(answer, right - left + 1);
				cnt--;
			}
			left++;
		}
	}
	if (answer === 1e9) return -1;
	return answer;
}

console.log(solution(arr, n, k));
