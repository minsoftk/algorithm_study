const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = input.map(Number);

arr.forEach((item) => {
	let val = 1;
	let cnt = 1;
	while (1) {
		if (val % item === 0) {
			console.log(cnt);
			break;
		}
		// mod를 돌려야 시간초과가 나지 않는다.
		val %= item;
		val = val * 10 + 1;
		cnt += 1;
	}
});
