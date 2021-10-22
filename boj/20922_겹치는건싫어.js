let input = require('fs')
	.readFileSync('./boj/input.txt')
	.toString()
	.split('\n');

let first = input[0].trim().split(' ');
let n = Number(first[0]);
let k = Number(first[1]);
let arr = input[1].trim().split(' ').map(Number);

console.log(n, k, arr);
function solution(arr, n, k) {
	let answer = -10;
	let left = 0;
	let cnt = 0;
	for (let right = 0; right < n; right++){
		if (arr[right] === )
	}


	if (answer === -10) return -1;
	return answer;
}

console.log(solution(arr, n, k));
