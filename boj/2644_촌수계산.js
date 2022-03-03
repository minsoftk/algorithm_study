const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0].trim());
let [a, b] = input[1].trim().split(' ').map(Number);
let m = Number(input[2].trim().split(' '));
let arr = input
	.slice(3, 3 + m)
	.map((elem) => elem.trim().split(' ').map(Number));

let parent = Array(n + 1).fill(0);

//  배열을 이용한 방법
// i번은 부모노드 요소값은 자식

for (let i = 0; i < m; i++) {
	parent[arr[i][1]] = arr[i][0];
}

let compare = [a, b];
let result = [];

for (let i = 0; i < 2; i++) {
	let temp = compare[i];
	let array = [];

	array.push(compare[i]);

	while (parent[temp]) {
		array.push(parent[temp]);
		temp = parent[temp];
	}

	result.push(array);
}

let answer = 1e9;
// console.log('here ', result);

for (let i = 0; i < result[0].length; i++) {
	for (let j = 0; j < result[1].length; j++) {
		if (result[0][i] === result[1][j]) {
			answer = Math.min(answer, i + j);
		}
	}
}

if (answer === 1e9) console.log(-1);
else console.log(answer);
