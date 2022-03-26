const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const n = Number(first);
let arr = last.map((e) => e.trim());

for (let i = 0; i < n; i++) {
	console.log(checkPalindrome(arr[i]));
}

function checkPalindrome(str) {
	let left = 0;
	let right = str.length - 1;
	let flag = 0;
	let temp_l = 0,
		temp_r = 0;
	while (left <= right) {
		// console.log(str[left], str[right]);
		if (str[left] === str[right]) {
			left += 1;
			right -= 1;
		} else {
			if (flag === 0) {
				temp_l = left;
				temp_r = right;
				flag += 1;
				left += 1;
				continue;
			} else if (flag === 1) {
				left = temp_l;
				right = temp_r - 1;
				flag += 1;
			} else if (flag === 2) {
				return 2;
			}
		}
	}
	if (flag === 0) {
		return 0;
	} else return 1;
}

let str = `
수원시
성남시
의정부시
안양시
부천시
광명시
평택시
동두천시
안산시
고양시
과천시
구리시
남양주시
오산시
시흥시
군포시
의왕시
하남시
용인시
파주시
이천시
안성시
김포시
화성시
광주시
양주시
포천시
여주시`;

let set = new Set('서울시', '서울시', '강남구');
console.log(...set);
