// function solution(need, plan) {
// 	let answer;

// 	let stack = [];
// 	// stack에 need 순서를 거꾸로 입력해준다. CBA -> ABC
// 	for (let i = 0; i < need.length; i++) {
// 		stack[need.length - 1 - i] = need[i];
// 	}

// 	// C, B, A 순서대로 일치하는 것을 찾으면 pop해준다.
// 	for (let i = 0; i < plan.length; i++) {
// 		let top = stack[stack.length - 1];
// 		if (top === plan[i]) stack.pop();
// 	}

// 	// 만약 stack의 length가 0이라면 순서대로 수업계획을 잘 짠 것이다.
// 	if (stack.length === 0) return 'YES';
// 	else return 'NO';
// }

function solution(need, plan) {
	let answer = 'YES';
	let queue = need.split('');
	for (let i = 0; i < plan.length; i++) {
		if (queue.includes(plan[i])) {
			if (plan[i] !== queue.shift()) return 'NO';
		}
	}
	if (queue.length > 0) return 'NO';
	return answer;
}

console.log(solution('CBA', 'CBDAGE')); // YES
console.log(solution('CBA', 'CBDBAGE')); // YES
