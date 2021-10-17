function solution(nums) {
	let answer = [];
	let temp = nums.toString().split('');
	let arr = [];
	let check = [];
	let flag = false;

	for (let x of temp) arr.push(parseInt(x));
	for (let i = 0; i < arr.length; i++) check[i] = 0;

	let len = arr.length;
	let tmp = [];
	arr.sort((a, b) => a - b);
	function DFS(L) {
		if (flag) return;
		if (L === len) {
			if (nums < parseInt(tmp.join(''))) {
				console.log(tmp);
				answer = parseInt(tmp.join(''));
				flag = true;
			}
		} else {
			for (let i = 0; i < arr.length; i++) {
				if (check[i] === 0) {
					tmp.push(arr[i]);
					check[i] = 1;
					DFS(L + 1);
					check[i] = 0;
					tmp.pop();
				}
			}
		}
	}

	// DFS 초기조건 0으로 시작
	DFS(0);
	if (!flag) return -1;
	return answer;
}

console.log(solution(123)); // 132
console.log(solution(321)); // -1
console.log(solution(20573)); // 20735
