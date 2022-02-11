const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

// console.log(input);
let n = input[0];

let arr = input.slice(1, n + 1);
// console.log(n, arr);

const MAX = 1000000;
let temp = new Array(MAX + 1).fill(1);
let dp = new Array(MAX + 1);
dp[0] = 0;

/**
 배수 아이디어 (i를 약수로 가지는 모든 수에 i를 더해준다.)
 그러면 temp에는 약수의 모든 합들이 저장되어있다.
 dp에 1~N 까지의 합을 저장해준다.
 */

/********* 1은 모든 수의 약수이므로 temp 배열을 1로 초기화 해준다. */

for (let i = 2; i <= MAX; i++) {
	for (let j = 1; j * i <= MAX; j++) {
		temp[i * j] += i;
	}
}

for (let i = 1; i <= MAX; i++) {
	dp[i] = dp[i - 1] + temp[i];
}

// 백준에서는 한꺼번에 출력을 시켜줘야 한다.... 나는 하나의 입력에 하나의 출력을 해줘서 답으로 인정이 안됐음...
let ans = [];
arr.forEach((element) => ans.push(dp[element]));
console.log(ans.join('\n'));
