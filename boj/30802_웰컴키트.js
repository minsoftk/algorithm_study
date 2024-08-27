const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
	const n = input[0];
	const TShirts = input[1].split(' ');
	const [t, p] = input[2].split(' ');

	let cnt = 0;
	for (let i = 0; i < TShirts.length; i += 1) {
		cnt += Math.ceil(TShirts[i] / t);
	}

	const dozen = Math.floor(n / p);
	return [cnt, [dozen, n - p * dozen].join(' ')].join('\n');
}

console.log(solution(input));
