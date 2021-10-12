//내풀이
function solution(s) {
	let stack = [];
	let answer = '';
	// ')'를 만날때가지 stack에 쌓는다. 만약 ')'일때 '('를 만날때까지 pop()을 수행한다.
	for (let i = 0; i < s.length; i++) {
		if (s[i] === ')') {
			while (stack.pop() !== '(');
		} else stack.push(s[i]);
	}
	// stack에 () 사이에 문자는 다 제거 됐다. 문자열로 만들어준다.
	answer = stack.join('');
	return answer;
}
console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)')); // EFLM

// 강사님 풀이
/*
function solution2(s) {
	let stack = [];
	let answer = '';

	for (let x of s) {
		if (x === ')') {
			while (stack.pop() !== '(');
		} else stack.push(x);
	}
	answer = stack.join('');
	return answer;
}
console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)')); // EFLM

*/
