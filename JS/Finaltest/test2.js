function solution(s) {
	function getStack(s) {
		let cnt = 0;
		if (s[0] === ')') return false;
		for (let i = 0; i < s.length; i++) {
			if (cnt < 0) return false;
			if (s[i] === '(') cnt++;
			else cnt--;
		}
		if (cnt === 0) return true;
		else return false;
	}

	function BFS() {
		let answer = 0;
		let L = 0;
		while (queue.length) {
			let len = queue.length;
			let arr = [];
			let set = new Set();
			for (let i = 0; i < len; i++) {
				let front = queue.shift();
				let temp = s.substring(0, front) + s.substring(front + 1, s.length);
				arr.push(temp);
			}
			for (let x of arr) {
				if (getStack(x)) set.add(x);
			}
			answer = set.size;
			L++;
		}
		return answer;
	}
	let answer;
	let check = Array(s.length + 1).fill(0);
	let queue = [];

	// let left = 0,
	// 	right = 0,
	// 	k = 0;
	for (let x of s) {
		if (x === '(') left++;
		else if (x === ')') right++;
	}
	// 만약 temp가 0이라면 left가 더 많고, 1이라면 right가 더 많다.

	// // 왼쪽이 더 크므로 왼쪽을 제거해야 한다.
	// if (left > right) k = 0;
	// else k = 1; // 그 외엔 오른쪽을 제거

	// // k = 1 인 경우 ")"을 제거하는 경우의 수
	// for (let i = 0; i < s.length; i++) {
	// 	if (k === 1 && s[i] === ')') queue.push(i);
	// 	else if (k === 0 && s[i] === '(') queue.push(i);
	// }
	answer = BFS();

	if (answer === undefined) return 0;
	return answer;
}
console.log(solution('()(()()'));
