const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [a, ...b] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +a;
const arr = b.map((_b) => _b.split(' ').map(Number));

arr.sort((a, b) => {
	if (a[1] * a[2] * a[3] === b[1] * b[2] * b[3]) {
		if (a[1] + a[2] + a[3] === b[1] + b[2] + b[3]) {
			return a[0] - b[0];
		}

		return a[1] + a[2] + a[3] - (b[1] + b[2] + b[3]);
	}
	return a[1] * a[2] * a[3] - b[1] * b[2] * b[3];
});
console.log(arr[0][0], arr[1][0], arr[2][0]);
