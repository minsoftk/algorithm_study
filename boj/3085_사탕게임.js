const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0]);
// console.log(n);
let arr = input.slice(1, n + 1).map((item) => item.trim().split(''));
// console.log(arr);

// 같은 문자열을 hash로 저장했는데 개수만 필요하므로, 굳이 저장할 필요가 없었음. 개수도 잘못셈
// 문제 이해를 잘못해서 바꾸고, count를 해야하는데 처음부터 count를 하고 시작함.
// switch를 시키고 전체를 다 확인하는게 비효율적이라고 생각해서 경우를 나눠서 생각했는데, 더 어렵게 풀게됨

// console.log(maxCandy);
// 스위치 전 행의 최대 개수

const checkCandyNum = () => {
	for (let i = 0; i < n; i++) {
		let cnt = 1;
		for (let j = 1; j < n; j++) {
			arr[i][j - 1] === arr[i][j] ? (cnt += 1) : (cnt = 1);
			maxCandy = Math.max(maxCandy, cnt);
		}
	}

	for (let i = 0; i < n; i++) {
		let cnt = 1;
		for (let j = 1; j < n; j++) {
			arr[j - 1][i] === arr[j][i] ? (cnt += 1) : (cnt = 1);
			maxCandy = Math.max(maxCandy, cnt);
		}
	}
};

// 인접한 다른 색 사탕 요소 찾기
let maxCandy = -1e9;
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let check = Array(n);
for (let i = 0; i < check.length; i++) {
	check[i] = Array(n).fill(0);
}

let queue = [];
// 인접한 사탕이 다른 것을 queue에 저장, dx,dy로 뻗었을 때 check된 배열이면 이미 확인한 것.
for (let i = 0; i < n; i++) {
	for (let j = 0; j < n; j++) {
		for (let k = 0; k < 3; k++) {
			let xx = i + dx[k];
			let yy = j + dy[k];
			if (xx >= 0 && xx < n && yy >= 0 && yy < n && check[xx][yy] === 0) {
				if (arr[xx][yy] !== arr[i][j]) {
					queue.push([i, j, xx, yy]);
					check[i][j] = 1;
				}
			}
		}
	}
}

while (queue.length) {
	let [x, y, xx, yy] = queue.shift();
	let temp = arr[x][y];
	arr[x][y] = arr[xx][yy];
	arr[xx][yy] = temp;

	checkCandyNum();

	// 다시 스위치
	temp = arr[x][y];
	arr[x][y] = arr[xx][yy];
	arr[xx][yy] = temp;
}

console.log(maxCandy);
