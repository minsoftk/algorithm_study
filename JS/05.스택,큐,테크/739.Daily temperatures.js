function solution(temper) {
	let stack = [];
	let answer = Array(temper.length).fill(0);
	for (let i = 0; i < temper.length; i++) {
		while (stack.length && temper[stack[stack.length - 1]] < temper[i]) {
			let top = stack.pop();
			answer[top] = i - top;
		}
		stack.push(i);
	}
	return answer;
}

console.log(solution([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
console.log(solution([30, 40, 50, 60])); // [1,1,1,0]
console.log(solution([30, 60, 90])); // [1,1,0]
