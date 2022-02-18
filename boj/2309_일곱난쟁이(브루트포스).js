const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
// console.log(input);

function DFS(L, cnt) {
	if (flag) return;
	if (cnt === 7) {
		let sum = 0;
		for (let x of temp) sum += x;
		if (sum === 100) {
			temp.sort((a, b) => a - b);
			flag = true;
			for (let x of temp) console.log(x);
			return;
		}
	} else {
		for (let i = L; i < 9; i++) {
			// if (check[i] === 0) {
			temp.push(input[i]);
			// check[i] = 1;
			DFS(L + 1, cnt + 1);
			// check[i] = 0;
			temp.pop();
			// }
		}
	}
}

let temp = [];
let flag = false;
let check = Array(9).fill(0);
DFS(0, 0);
