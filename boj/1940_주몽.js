const { count } = require('console');
const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [n] = input[0].trim().split(' ').map(Number);
let [m] = input[1].trim().split(' ').map(Number);
let temp = [];
let arr = [];
for (let i = 2; i < input.length; i++) {
	temp.push(input[i].trim().split(' ').map(Number));
}
for (let x of temp[0]) arr.push(x);
// console.log(n, m, arr);

function solution(n, m, arr) {
	let answer = 0;
	let left = 0,
		right = n - 1;
	arr.sort((a, b) => a - b);

	// 같으면 안되는 경우가 있기 때문에 같다를 빼줘야 한다. 반례는 아래에 있다.
	while (left < right) {
		if (arr[left] + arr[right] === m) {
			answer++;
			left++;
			right--;
		} else if (arr[left] + arr[right] < m) left++;
		else right--;
	}
	return answer;
}
console.log(solution(n, m, arr));
// 4
// 3
// 1 2 3
