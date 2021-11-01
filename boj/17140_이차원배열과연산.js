// const { count, timeStamp } = require('console');
// const fs = require('fs');
// const { DefaultSerializer } = require('v8');
// const filePath =
// 	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// let [r, c, k] = input[0].trim().split(' ').map(Number);

// let arr = [];
// for (let i = 1; i < input.length; i++) {
// 	arr.push(input[i].trim().split(' ').map(Number));
// }

// console.log(n, r, k, arr);

function solution(r, c, k, arr) {
	// 행이 더 크다면 'R'을 반환, 열이 더 크다면 'C'를 반환
	function rc(arr) {
		if (arr.length >= arr[0].length) return 'r';
		else return 'c';
	}
	// r, c 연산을 각각 해준다.
	function sortRow(arr) {
		let changeArr = [];
		let maxlength = 0;
		for (let i = 0; i < arr.length; i++) {
			let hash = new Map();
			for (let j = 0; j < arr[i].length; j++) {
				if (arr[i][j] === 0) continue;
				hash.set(arr[i][j], (hash.get(arr[i][j]) || 0) + 1);
			}
			let temp = [...hash].sort((a, b) => {
				if (a[1] === b[1]) return a[0] - b[0];
				return a[1] - b[1];
			});
			changeArr.push(temp.join().split(',').map(Number));
		}
		// 가장 먼저 제일 긴 길이의 배열을 찾아준다.
		for (let i = 0; i < changeArr.length; i++)
			maxlength = Math.max(maxlength, changeArr[i].length);
		let returnArr = [];
		for (let i = 0; i < arr.length; i++)
			returnArr[i] = Array(maxlength).fill(0);

		for (let i = 0; i < changeArr.length; i++) {
			for (let j = 0; j < changeArr[i].length; j++) {
				returnArr[i][j] = changeArr[i][j];
			}
		}
		return returnArr;
	}

	function sortCol(arr) {
		let changeArr = [];
		let maxlength = 0;

		for (let i = 0; i < arr[0].length; i++) {
			let hash = new Map();
			for (let j = 0; j < arr.length; j++) {
				if (arr[j][i] === 0) continue;
				hash.set(arr[j][i], (hash.get(arr[j][i]) || 0) + 1);
			}
			let temp = [...hash].sort((a, b) => {
				if (a[1] === b[1]) return a[0] - b[0];
				return a[1] - b[1];
			});
			changeArr.push(temp.join().split(',').map(Number));
		}

		// 가장 먼저 제일 긴 열의 길이를 찾아준다.
		for (let i = 0; i < changeArr.length; i++)
			maxlength = Math.max(maxlength, changeArr[i].length);

		let returnArr = Array(maxlength);
		for (let i = 0; i < returnArr.length; i++)
			returnArr[i] = Array(arr[0].length).fill(0);

		for (let i = 0; i < changeArr.length; i++) {
			for (let j = 0; j < changeArr[i].length; j++) {
				returnArr[j][i] = changeArr[i][j];
			}
		}
		return returnArr;
	}

	let answer = 0;
	while (1) {
		if (rc(arr) === 'r') arr = sortRow(arr);
		else arr = sortCol(arr);
		answer++;
		if (arr.length >= r + 1 && arr[0].length >= c + 1) break;
	}
	while (answer < 100 && arr[r - 1][c - 1] !== k) {
		if (rc(arr) === 'r') arr = sortRow(arr);
		else arr = sortCol(arr);
		answer++;
	}
	if (answer >= 100 && arr[r - 1][c - 1] !== k) return -1;
	return answer;
}

// console.log(solution(r, c, k, arr));

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input;
let list = [];
rl.on('line', function (line) {
	input.push(line);
	rl.close();
}).on('close', function () {
	let [r, c, k] = input[0].trim().split(' ').map(Number);

	let arr = [];
	for (let i = 1; i < input.length; i++) {
		list = input[i].trim().split(' ').map(Number);
	}
	console.log(r, c, k);
	// solution(r, c, k, arr);
	process.exit();
});
