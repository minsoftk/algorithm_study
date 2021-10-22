function solution(nums) {
	let answer = '';
	let len = nums.length;
	let stack = [];

	for (let i = 0; i < len; i++) {
		if (nums[i] === ']') {
			let arr = '';
			while (stack[stack.length - 1] !== '[') {
				arr = stack.pop() + arr;
			}
			stack.pop();
			console.log(stack[stack.length - 1]);
			let digit = '';
			while (!isNaN(parseInt(stack[stack.length - 1]))) {
				digit = stack.pop() + digit;
			}
			stack.push(arr.repeat(parseInt(digit)));
		} else stack.push(nums[i]);
		console.log(stack);
	}
	while (stack.length) {
		answer = stack.pop() + answer;
	}
	return answer;
}
console.log(solution('3[a]2[bc]')); // aaabcbc
console.log(solution('3[a2[c]]')); // accaccacc
console.log(solution('2[abc]3[cd]ef')); // abcabccdcdcdef
console.log(solution('abc3[cd]xyz')); // abccdcdcdxyz
