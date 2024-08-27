const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
	const n = Number(input);

	const memo = Array(n + 1).fill(0);

	function fibo(n) {
		if (n >= 2 && memo[n] > 0) return memo[n];
		if (n === 0) return 0;
		if (n === 1) return 1;
		return (memo[n] = fibo(n - 1) + fibo(n - 2));
	}

	return fibo(n);
}

console.log(solution(input));
