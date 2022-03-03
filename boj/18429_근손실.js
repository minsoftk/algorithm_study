const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, k] = input[0].trim().split(' ').map(Number);
let weight = input[1].trim().split(' ').map(Number);

let answer = [];
let temp = [];
let cnt = 0;
let check = Array(n + 1).fill(0);

DFS(0, 500);

function DFS(L, sum) {
	if (sum < 500) return;
	if (L === n) {
		if (sum >= 500) {
			cnt += 1;
		}
	} else {
		for (let i = 1; i <= n; i++) {
			if (check[i] === 0) {
				check[i] = 1;
				DFS(L + 1, sum - k + weight[i - 1]);
				check[i] = 0;
			}
		}
	}
}
console.log(cnt);
