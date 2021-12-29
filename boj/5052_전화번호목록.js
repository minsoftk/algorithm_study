const { count } = require('console');
const {
	SSL_OP_TLS_ROLLBACK_BUG,
	SSL_OP_NETSCAPE_CHALLENGE_BUG,
} = require('constants');
const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let T = Number(input[0].trim());
let valNum = [];
let val = [];
let n = 1;
for (let i = 1; i <= T; i++) {
	num = Number(input[n].trim());
	valNum.push(num);
	let arr = [];
	for (let j = 1; j <= num; j++) {
		arr.push(input[n + j].trim());
	}
	val.push(arr);
	// console.log(val);
	// console.log(num);
	n = n + num + 1;
}
// console.log(valNum, val);
function solution(valNum, val) {
	for (let i = 0; i < val.length; i++) {
		// val[i].sort((a, b) => a.length - b.length);
		val[i].sort();
		let flag = false;
		let len = 0;
		for (let j = 0; j < valNum[i]; j++) {
			// console.log('test1', val[i][j].slice(0, len), 'test2', val[i][j - 1]);
			if (val[i][j].slice(0, len) === val[i][j - 1]) {
				flag = true;
				break;
			}
			len = val[i][j].length;
		}
		if (flag) console.log('NO');
		else console.log('YES');
	}
}

solution(valNum, val);
