function solution(n) {
	let answer = Number.MAX_SAFE_INTEGER;
	let nums = [],
		flag = false;
	let s = n;
	while (s > 0) {
		let t = s % 10;
		nums.push(t);
		s = parseInt(s / 10);
	}
	console.log('nums', nums);
	nums.sort((a, b) => a - b);
	let tmp = [];
	let len = nums.length;
	let ch = Array.from({ length: len }, () => 0);
	function DFS(L) {
		if (flag) return;
		if (L === len) {
			let res = 0;
			for (let i = 0; i < len; i++) {
				res = res * 10 + tmp[i];
			}
			if (res > n) {
				answer = res;
				flag = true;
			}
		} else {
			for (let i = 0; i < len; i++) {
				if (ch[i] === 0) {
					ch[i] = 1;
					tmp.push(nums[i]);
					DFS(L + 1);
					ch[i] = 0;
					tmp.pop();
				}
			}
		}
	}
	DFS(0);
	if (!flag) return -1;
	return answer;
}
console.log(solution(156)); //165
console.log(solution(330)); //-1
console.log(solution(27711)); //71127
console.log(solution(54312)); //54321
console.log(solution(765423)); //765432
console.log(solution(33051)); //33105
console.log(solution(6543721)); //6547123
console.log(solution(3902830)); //3903028
console.log(solution(54321)); //-1
console.log(solution(54300)); //-1
