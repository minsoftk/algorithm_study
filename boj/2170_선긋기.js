const { count, timeStamp } = require('console');
const fs = require('fs');
const { DefaultSerializer } = require('v8');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let n = Number(input[0].trim().split(' '));
let arr = [];
for (let i = 1; i < input.length; i++) {
	arr.push(input[i].trim().split(' ').map(Number));
}
// console.log(n, arr);
// console.log(m, n, k, arr);

function solution(n, arr) {
	let answer = 0;
	// 연결된 선을 구해야 하므로 시작을 기준으로 sort를 해준다.
	arr.sort((a, b) => a[0] - b[0]);

	// 처음 좌표의 왼쪽, 오른쪽 좌표 입력
	let left = arr[0][0];
	let right = arr[0][1];

	// 1번 인덱스부터 비교한다.
	for (let i = 1; i < n; i++) {
		// 이전 좌표 x,y  다음 선의 좌표 x2,y2 라 가정.
		// x2가 y보다 작거나 같을 때, y2가 y보다 클 때 겹치는 모든 경우를 처리해줄 수 있다.
		// x2,y2가 x,y에 포함되는 경우는 생각하지 않아도 된다. 포함이 되기 때문.
		// y 좌표를 옮겨준다.
		if (arr[i][0] <= right && arr[i][1] > right) {
			right = arr[i][1];
		}
		// 좌표들이 겹치지 않을 때
		else if (arr[i][0] > right) {
			// 이전 좌표들의 거리를 먼저 더해준다.
			answer += right - left;
			right = arr[i][1];
			left = arr[i][0];
		}
	}
	// 끝나고나서 구해진 마지막 좌표의 합을 구해준다.
	answer += right - left;
	return answer;
}
console.log(solution(n, arr));
