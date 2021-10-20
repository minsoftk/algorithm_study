// let input = require('fs')
// 	.readFileSync('/dev/stdin')
// 	.toString()
// 	.split('\n');

let input = require('fs')
	.readFileSync('./boj/input.txt')
	.toString()
	.split('\n');

let n = Number(input[0]);
let stones = new Array(n);
for (let i = 0; i < stones.length; i++) {
	// stones -> 넓이, 높이, 무게, 그 벽돌의 index
	stones[i] = new Array(4);
}
for (let i = 0; i < n; i++) {
	stones[i] = input[i + 1].split(' ').map(Number);
	stones[i][3] = i + 1;
}

function solution(n, arr) {
	let cnt = 0;
	let dy = Array(n).fill(0); // 쌓인 벽돌의 개수를 저장하는 변수
	let stone = Array(n);
	for (let i = 0; i < n; i++) stone[i] = Array();
	arr.sort((a, b) => b[0] - a[0]);

	dy[0] = arr[0][1];
	stone[0].push(arr[0][3]);
	for (let i = 1; i < n; i++) {
		stone[i].push(arr[i][3]);
		let max = 0;
		for (let j = i - 1; j >= 0; j--) {
			if (arr[i][2] < arr[j][2] && dy[j] > max) {
				max = dy[j];
			}
		}
		dy[i] = max + 1;
		for (let j = 0; j < i; j++) {
			if (arr[i][2] < arr[j][2] && dy[j] < dy[i]) {
				for (let x of stone[j]) stone[i].push(x);
			}
		}
		cnt = Math.max(cnt, dy[i]);
	}
	console.log(cnt);
	console.log(stone);

	// for (let i = 0; i < n-1; i++){
	// 	for (let j = 0; j < i; j++){
	// 		if ()
	// 	}
	// }
}

console.log(solution(n, stones)); // 7
// console.log(
// 	solution([
// 		[25, 3, 4],
// 		[4, 4, 6],
// 		[9, 2, 3],
// 		[16, 2, 5],
// 		[1, 5, 2],
// 	])
// ); // 7
