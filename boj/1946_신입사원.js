const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = 0;
let T = Number(input[num++].trim());

// for (let i = 1; i <= T; i++) {
// 	num = Number(input[n].trim());
// 	valNum.push(num);
// 	let arr = [];
// 	for (let j = 1; j <= num; j++) {
// 		arr.push(input[n + j].trim().split(' ').map(Number));
// 	}
// 	val.push(arr);
// 	n = n + num + 1;
// }

// console.log(valNum);
// console.log(val);

const solution = () => {
	let answer = [];

	while (T--) {
		let n = input[num++].trim();
		let score = [];
		for (let i = 0; i < n; i++) {
			score.push(input[num++].trim().split(' ').map(Number));
		}

		score.sort((a, b) => a[0] - b[0]);

		let cnt = 1;
		let left = 0;
		let min = 1e9;
		for (let right = 1; right < n; right++) {
			if (score[left][1] > score[right][1]) {
				cnt += 1;
				left = right;
			}
		}
		console.log(cnt);
	}
};
solution();
