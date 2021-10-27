const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0].trim());
let work = [];
for (let i = 1; i < input.length; i++) {
	work.push(input[i].trim().split(' ').map(Number));
}

// 최소로 사용 가능한 회의실을 구해야된다 -> 최대 겹치는 회의실을 구해야 한다.
function solution(n, work) {
	let answer = 0;
	let arr = [];
	for (let i = 0; i < work.length; i++) {
		arr.push([work[i][0], 1]);
		arr.push([work[i][1], -1]);
	}

	// 종료시간을 오름차순 해줘서 끝나는 회의를 cnt에서 먼저 빼줘야 한다.
	arr.sort((a, b) => {
		if (a[0] === b[0]) return a[1] - b[1];
		return a[0] - b[0];
	});

	let cnt = 0;
	for (let [a, b] of arr) {
		cnt += b;
		answer = Math.max(answer, cnt);
	}
	return answer;
}
console.log(solution(n, work)); // 4
