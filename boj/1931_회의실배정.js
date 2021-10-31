const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0].trim());
let work = [];
for (let i = 1; i < input.length; i++) {
	work.push(input[i].trim().split(' ').map(Number));
}

function solution(n, work) {
	let answer = 0;

	// 회의가 일찍 끝나는 기준으로 오름차순 정렬을 해야지 더 많은 선택을 할 수 있다.
	// 시작 시간과 끝나는 시간이 같은 경우가 있다. 그래서 같을때는 내림차순 정렬을 해줘야 포함이 된다.
	work.sort((a, b) => {
		if (a[1] === b[1]) return a[0] - b[0];
		return a[1] - b[1];
	});

	let start = 0;
	for (let x of work) {
		if (x[0] >= start) {
			start = x[1];
			answer++;
		}
	}
	return answer;
}
console.log(solution(n, work)); // 4
