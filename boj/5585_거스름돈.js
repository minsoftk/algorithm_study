const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim().split('\n')[0];

const moneyArr = [500, 100, 50, 10, 5, 1];

function solution(input) {
	let remain = 1000 - input;
	let result = 0;
	moneyArr.forEach((money) => {
		if (money <= remain) {
			const q = Math.floor(remain / money);
			result += q;
			remain -= q * money;
		}
	});

	return result;
}

console.log(solution(input));
