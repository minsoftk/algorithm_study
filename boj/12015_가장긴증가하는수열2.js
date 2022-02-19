const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0].trim());
// console.log(n);

let arr = input[1].split(' ').map(Number);
// console.log(arr);

let dy = Array(1).fill(0);
dy[0] = arr[0];
// console.log(dy);

for (let i = 1; i < arr.length; i++) {
	let max = 0;
	if (dy[dy.length - 1] < arr[i]) dy.push(arr[i]);
	else {
		let left = 0,
			mid = 0,
			right = dy.length - 1;
		while (left <= right) {
			mid = parseInt((left + right) / 2);
			if (arr[i] > dy[mid]) {
				left = mid + 1;
			} else if (arr[i] < dy[mid]) {
				right = mid - 1;
			} else {
				break;
			}
		}
		console.log(dy);
		dy[mid] = arr[i];
	}
	// console.log(left, right);
	console.log(dy);
}
console.log(dy.length);
