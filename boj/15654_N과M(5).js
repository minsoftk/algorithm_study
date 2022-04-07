const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, last] = fs.readFileSync(filePath).toString().trim().split('\n');

// console.log('here input', input);

const [n, m] = first.trim().split(' ').map(Number);
let arr = last
	.trim()
	.split(' ')
	.map((e) => +e);
arr.sort((a, b) => a - b);

function solution(n, m, arr) {
	function DFS(L, idx) {
		if (L === m) {
			console.log(...temp);
			return;
		} else {
			for (let i = 0; i < arr.length; i += 1) {
				if (!check[arr[i]]) {
					temp.push(arr[i]);
					check[arr[i]] = 1;
					DFS(L + 1, i + 1);
					temp.pop();
					check[arr[i]] = 0;
				}
			}
		}
	}

	let check = Array(n + 1).fill(0);
	let temp = [];
	DFS(0, 0);
}

solution(n, m, arr);
