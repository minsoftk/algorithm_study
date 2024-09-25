const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
input.pop();
function solution(input) {
	const result = [];
	input.forEach((element) => {
		const [k, ...s] = element.split(' ').map(Number);
		console.log('🚀 ~ input.forEach ~ k:', k);

		const arr = [];

		const combination = (index, level) => {
			if (level === 6) {
				result.push(arr.join(' '));
				return;
			} else {
				for (let i = index; i < k; i += 1) {
					arr.push(s[i]);
					combination(i + 1, level + 1);
					arr.pop();
				}
			}
		};

		combination(0, 0);
		result.push('');
	});

	return result.join('\n');
}

console.log(solution(input));
