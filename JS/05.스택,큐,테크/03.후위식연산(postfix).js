function solution(s) {
	let answer = 0;

	// 숫자가 아닌 경우 정규식
	let reg = /[^0-9]/;
	let stack = [];

	for (let i = 0; i < s.length; i++) {
		// s[i]가 숫자가 아니라면, 정규식을 이용 /[0-9]/ 로도 사용가능.
		// 숫자가 아닌 연산 기호들을 만나면 숫자 2개를 pop해준다.
		if (reg.test(s[i])) {
			// pop한 숫자들 각각 저장, s라는 문자열이기에 숫자로 변환해준다.
			let second = parseInt(stack.pop()),
				first = parseInt(stack.pop());
			// '*'일 경우
			if (s[i] === '*') stack.push(first * second);
			// '/' 나누기 일 경우
			else if (s[i] === '/') stack.push(first / second);
			// '+' 일 경우
			else if (s[i] === '+') stack.push(first + second);
			// '-' 일 경우
			else stack.push(first - second);
		} else {
			stack.push(s[i]);
		}
	}
	// 스택의 마지막 값은 최종 연산 값이 남는다.
	return stack.pop();
}
console.log(solution('352+*9-')); // 12
