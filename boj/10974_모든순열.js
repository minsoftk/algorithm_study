const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
	const check = Array(input + 1).fill(false);
	const result = [];
	const arr = [];

	function permutation(level) {
		if (level === input) {
			result.push(arr.join(' '));
		}

		for (let i = 1; i <= input; i += 1) {
			if (check[i] === true) {
				continue;
			}
			arr.push(i);
			check[i] = true;
			permutation(level + 1);
			arr.pop();
			check[i] = false;
		}
	}

	permutation(0);

	return result.join('\n');
}

console.log(solution(input));
