function solution(arr) {
	var answer = [[]];
	let max = Math.max(...arr);
	let stack = [];

	stack.push(arr[0]);
	let cnt = 0;
	for (let k = max; k > 0; k--) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === max) {
				stack.push(i);
			}
		}
	}

	return answer;
}

console.log(solution([3, 2, 1, 1, 3]));
//[([1, 11], [2, 2], [3, 2])]
