function solution(num, k) {
	let answer;
	let stack = [];
	for (let x of num.toString()) {
		while (k > 0 && stack.length && stack[stack.length - 1] > x) {
			stack.pop();
			k--;
		}
		stack.push(x);
	}
	answer = stack.join('');
	answer = answer.substring(0, answer.length - k);
	if (answer.length === 0) return 0;
	return Number(answer);
}
//console.log(solution(7612345, 5)); //12
//console.log(solution(999102345, 5)); //234
//console.log(solution(10000023, 2)); //2
//console.log(solution(30000043, 3)); //0
//console.log(solution(12345670, 7)); //0
//console.log(solution(123456, 3)); //123
//console.log(solution(12003, 3)); //0
//console.log(solution(9, 1)); //0
//console.log(solution(98765432, 7)); //2
//console.log(solution(57622312, 4)); //2212
