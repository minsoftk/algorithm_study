const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')
	.map((e) => e.trim());

const [n, k, b] = first.split(' ').map(Number);
const arr = last.map((e) => Number(e));

let check = Array(100001).fill(1);

arr.forEach((e) => (check[e] = 0));

let minCnt = 1e9,
	left = 0,
	cnt = 0;

// 망가진 횡단보도 1~k까지 개수
for (let i = 1; i <= k; i++) {
	if (!check[i]) cnt += 1;
}

// minCnt에 저장
minCnt = Math.min(cnt, minCnt);

left = 1;
cnt = minCnt;
// 1과 7을 비교해서 1이 망가졌다면, cnt에서 1을 빼준다.(연속된 k에서 빠지는 idx이므로)
// 7이 망가졌다면 cnt에 1을 더해준다.(연속된 k에 들어가는 idx이므로)
for (let right = k + 1; right <= n; right += 1) {
	cnt = !check[left] ? cnt - 1 : cnt;
	cnt = !check[right] ? cnt + 1 : cnt;
	left += 1;

	// 기존의 cnt와 minCnt를 비교해서 최소값을 재할당
	minCnt = Math.min(cnt, minCnt);
}

console.log(minCnt);
