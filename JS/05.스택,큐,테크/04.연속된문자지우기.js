function solution(s) {
	// 맨 처음 값을 입력해놓는다. stack의 top을 만들기 위함.
	let answer = [s[0]];

	// 0인 경우 stack의 처음 값으로 입력. s만큼 탐색.
	for (let i = 1; i < s.length; i++) {
		// for문을 돌 때마다 stack의 최상단을 top에 저장해준다.
		let top = answer[answer.length - 1];

		// 만약 top값과 s[i] 값이 같다면, pop() 해준다.
		// -> s[i]의 요소는 다음 i + 1로 넘어가 생략이 되며, stack에 저장된 top은 pop된다.
		// 즉, 'a'만 저장되어 있는 stack에서 s[i] = 'a' 를 만나게 되면 'aa'를 생략하게 된다.
		if (s[i] === top) answer.pop();
		// 값이 같지 않다면 stack에 push 해준다.
		else answer.push(s[i]);
	}
	return answer;
}
console.log(solution('acbbcaa')); // a
console.log(solution('bacccaba')); // bacaba
