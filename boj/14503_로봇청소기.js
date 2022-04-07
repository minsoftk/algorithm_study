const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [n, m] = input[0].trim().split(' ').map(Number);
let robot = input[1].trim().split(' ').map(Number);
let arr = [];
for (let i = 2; i < input.length; i++) {
	arr.push(input[i].trim().split(' ').map(Number));
}

function solution(n, m, robot, arr) {
	let answer = 1; // 로봇이 던져진 곳은 청소한 것으로 치므로 1로 선언
	let check = Array(n);
	for (let i = 0; i < check.length; i++) check[i] = Array(m).fill(0);

	// 0 1 2 3 북 동 남 서
	// 왼쪽 회전
	let turn = [
		[0, -1],
		[-1, 0],
		[0, 1],
		[1, 0],
	];
	// 후진
	let back = [
		[1, 0],
		[0, -1],
		[-1, 0],
		[0, 1],
	];

	let queue = []; // 로봇이 탐색하는 위치를 저장
	let path = robot[2]; // 로봇이 바라보는 방향을 저장

	// 로봇의 좌표를 queue에 넣는다.
	queue.push([robot[0], robot[1]]);
	// 로봇이 청소한 곳의 좌표를 방문 체크.
	check[robot[0]][robot[1]] = 1;

	// queue가 빌때까지 반복
	while (queue.length) {
		// 청소할 공간 탐색
		let front = queue.shift();
		let k = 0; // 4방향을 모두 탐색했을 때의 조건을 만들기 위한 변수
		let temp = path; // 4방향 모두 청소가 되어있을 때, 원래의 방향이 필요하다. 방향을 저장
		for (let i = 0; i < 4; i++) {
			// 왼쪽으로 회전 시켰을 때의 좌표값 xx, yy
			let xx = front[0] + turn[path][0];
			let yy = front[1] + turn[path][1];
			// 왼쪽으로 돌았을 때, -1을 해줘서 방향을 변경해준다. 북 -> 서
			path = path - 1;
			if (path === -1) path = 3;

			// 만약 청소할 수 있고 벽이 아니라면
			if (
				xx >= 0 &&
				yy >= 0 &&
				xx < n &&
				yy < m &&
				check[xx][yy] === 0 &&
				arr[xx][yy] !== 1
			) {
				// 회전한 방향을 queue에 넣어주고, 방문체크
				queue.push([xx, yy]);
				check[xx][yy] = 1;
				// 해당 칸을 청소 했으므로 +1을 해준다.
				answer++;
				// 한칸 씩을 탐색하기 위해서 break를 해준다.
				break;
			}
			k++;
		}

		// k가 4일 경우는, 모두 탐색했는데도 청소안한 곳을 못찾은 것이다.
		if (k === 4) {
			// 원래의 방향을 저장하고 있는 temp를 활용해 후진 좌표를 구한다.
			let back_x = front[0] + back[temp][0];
			let back_y = front[1] + back[temp][1];

			// 만약 후진 했을 때도 벽이라면 break를 해준다. 그러면 queue는 비어있는 상태다.
			// 경로를 하나씩만 넣어서 탐색했기 때문이다.
			if (arr[back_x][back_y] === 1) break;
			else {
				// 벽이 아니라면 후진한 칸을 방문체크해주고, queue에 넣어준다.
				check[back_x][back_y] = 1;
				queue.push([back_x, back_y]);
			}
		}
	}
	return answer;
}
console.log(solution(n, m, robot, arr));
// 4
