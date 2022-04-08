const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const num = first;
let arr = last.map((e) => e.trim().split(' ').map(Number));

function gcd(a, b) {
	while (b != 0) {
		let r = a % b;
		a = b;
		b = r;
	}
	return a;
}

function lcm(a, b) {
	return (a * b) / gcd(a, b);
}

for (let elem of arr) {
	let [n, m, x, y] = elem;
	let i = 1,
		j = 1,
		cnt = 0;
	let limit = lcm(n, m);

	for (cnt = x; cnt <= limit; cnt += n) {
		let temp = cnt % m === 0 ? m : cnt % m;
		if (temp === y) {
			console.log(cnt);
			break;
		}
	}
	if (cnt > limit) console.log(-1);
}
