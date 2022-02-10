const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let T = Number(input[0].trim());
let val = Array(T);
let arr = Array(T);
for (let i = 0; i < T; i++) {
	val[i] = Number(input[3 * i + 1].trim());
	arr[i] = [[0, ...input[3 * i + 2].trim().split(' ').map(Number)]];

	arr[i].push([0, ...input[3 * i + 3].trim().split(' ').map(Number)]);
}

function solution(T, val, arr) {
	// console.log(arr);
	let answer = [];
	let cnt = 0;
	while (T--) {
		let dy = Array(2);
		for (let i = 0; i < dy.length; i++) dy[i] = Array(100001).fill(0);
		// console.log('arr', arr[cnt]);
		// console.log('val', val[cnt]);
		let temp_arr = arr[cnt];
		// console.log('temp_arr', temp_arr);
		dy[0][1] = temp_arr[0][1];
		dy[1][1] = temp_arr[1][1];

		for (let i = 2; i <= val[cnt]; i++) {
			dy[0][i] = Math.max(dy[1][i - 1], dy[1][i - 2]) + temp_arr[0][i];
			dy[1][i] = Math.max(dy[0][i - 1], dy[0][i - 2]) + temp_arr[1][i];
		}
		// console.log('cy', dy);
		console.log(Math.max(dy[0][val[cnt]], dy[1][val[cnt]]));
		cnt++;
	}
}
solution(T, val, arr);
