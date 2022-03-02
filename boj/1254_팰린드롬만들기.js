const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

for (let i = 0; i < input.length; i++) {
	let s = input.slice(i, input.length + 1);

	if (checkPalindrome(s)) {
		console.log(input.length + i);
		return;
	}
}

function checkPalindrome(s) {
	if (s.split('').reverse().join('') === s) {
		return true;
	} else return false;
}
