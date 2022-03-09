const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

let check = Array(26).fill(-1);

for (let i = 0; i < input[0].length; i++) {
	let x = input[0][i];
	if (check[x.charCodeAt() - 97] >= 0) continue;
	check[x.charCodeAt() - 97] = i;
}

console.log(check.join(' '));
