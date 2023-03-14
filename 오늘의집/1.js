function solution(path) {
	let answer = [];
	let timeStamp = [];
	let hash = new Map();
	let startIdx = 0;
	let idx = 0;
	while (idx < path.length) {
		startIdx = idx;
		let j = idx;
		console.log('test0', j);
		while (j < path.length && path[idx] === path[j]) {
			j += 1;
		}
		console.log('test1', j);
		idx += j;
	}
	return answer;
}

console.log(solution('EEESEEEEEENNNN'));
