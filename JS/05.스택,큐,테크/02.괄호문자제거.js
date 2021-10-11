function solution(s) {
	let stack = [];
	let answer = '';

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			stack.push(1);
		} else if (s[i] === ')') {
			stack.pop();
		} else {
			if (stack.length === 0) answer += s[i];
		}
	}
	return answer;
}
console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)')); // EFLM
