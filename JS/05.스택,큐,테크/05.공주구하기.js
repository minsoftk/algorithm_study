function solution(n, k) {
	let answer;
	let temp = [];
	for (let i = 1; i <= n; i++) {
		temp[i - 1] = i;
	}
	temp[0] = -1;
	let pos = 0;
	let cnt = n;
	while (cnt) {
		for (let i = 1; i <= k; i++) {
			temp[pos + k] == 0;
		}
		cnt--;
	}
	console.log(temp);
	return answer;
}
console.log(solution(8, 3)); // 7
