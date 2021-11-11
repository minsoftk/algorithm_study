function solution(asteroids) {
	let stack = [];

	for (const x of asteroids) {
		let top = stack[stack.length - 1];
		if (stack.length === 0 || x > 0 || (x < 0 && top < 0)) stack.push(x);
		else {
			while (stack.length && top > 0 && x < 0 && Math.abs(top) < Math.abs(x)) {
				stack.pop();
				top = stack[stack.length - 1];
			}
			if (x + top === 0) stack.pop();
			else if (!stack.length || top < 0) stack.push(x);
		}
	}
	return stack;
}

console.log(solution([5, 10, -5])); // [5, 10]
console.log(solution([8, -8])); // [8, -8]
console.log(solution([10, 2, -5])); // [10]
console.log(solution([-2, -1, 1, 2])); // [-2,-1,1,2]
console.log(solution([-2, -2, -1, -2])); // [-2,-2,-1,-2]
console.log(solution([-2, -2, 1, -2])); // [-2,-2,-2]
console.log(solution([-2, -1, 1, -2])); // [-2,-1,-2]
