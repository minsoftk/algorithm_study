const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [a, b] = input[0].split(' ').map(Number);

// console.log(a, b);

const getGcd = (a, b) => {
	while (b != 0) {
		let r = a % b;
		a = b;
		b = r;
	}
	return a;
};

const getLcm = (a, b, gcd) => {
	return (a * b) / gcd;
};

const sol = (a, b) => {
	let gcd = getGcd(a, b);
	console.log(gcd);
	console.log(getLcm(a, b, gcd));
};

sol(a, b);
