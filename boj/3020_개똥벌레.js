const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, H] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number);

function solution(N, H, arr) {
	let tops = [];
	let bottoms = [];

	for (let i = 0; i < arr.length; i += 1) {
		if (i % 2 === 0) bottoms.push(arr[i]);
		else tops.push(H - arr[i] + 1);
	}

	tops = tops.sort((a, b) => a - b);
	bottoms = bottoms.sort((a, b) => a - b);

	let mn = 1e12;
	let mn_num = 0;

	for (let h = 1; h <= H; h += 1) {
		let cntBottom = Math.floor(N / 2) - (getIdx(bottoms, h - 1) + 1);
		let cntTop = getIdx(tops, h) + 1;

		if (mn === cntBottom + cntTop) mn_num += 1;

		if (mn > cntBottom + cntTop) {
			mn = cntBottom + cntTop;
			mn_num = 1;
		}
	}
	return [mn, mn_num].join(' ');
}

function getIdx(arr, num) {
	let cur = -1;
	let step = arr.length;

	while (step !== 0) {
		while (cur + step < arr.length && arr[cur + step] <= num) {
			cur += step;
		}
		step = Math.floor(step / 2);
	}

	return cur;
}

console.log(solution(N, H, arr)); // 2 3
