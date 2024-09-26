const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
	const [L, C] = input[0].split(' ').map(Number);
	const password = input[1].split(' ').sort();
	// console.log('🚀 ~ solution ~ password:', password);
	const moeum = ['a', 'e', 'i', 'o', 'u'];
	const result = [];
	const arr = [];
	function combination(index, level, hasMoeum, hasJaeum) {
		if (level === L) {
			if (hasMoeum >= 1 && hasJaeum >= 2) {
				result.push(arr.slice().join(''));
			}
			return;
		}

		for (let i = index; i < C; i += 1) {
			arr.push(password[i]);
			const isMoeum = moeum.includes(password[i]);
			combination(i + 1, level + 1, isMoeum ? hasMoeum + 1 : hasMoeum, !isMoeum ? hasJaeum + 1 : hasJaeum);
			arr.pop();
		}
	}

	combination(0, 0, 0, 0);

	return result.join('\n');
}

console.log(solution(input));
