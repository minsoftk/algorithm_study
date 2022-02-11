const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// console.log(input);
let n = Number(input[0].trim());

// let arr = input[1].trim().split(' ').map(Number);
// console.log(n, arr);

const sol = (n) => {
	let arr = Array(n + 1).fill(0);

	let ans = 0;
	// 2중 for문
	// let sum = 0;
	// for (let i = 1; i <= n; i++) {
	// 	sum = 0;

	// 	for (let j = 1; j <= i; j++) {
	// 		if (i % j === 0) sum += j;
	// 	}
	// 	// arr[i] = sum;
	// 	res += sum;
	// }

	for (let i = 1; i <= n; i++) {
		ans += Math.floor(n / i) * i;
	}

	console.log(ans);
};

sol(n);
