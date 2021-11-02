// 항상 stack의 상단의 것과 비교한다.
// 최상단의 값과 비교해서 입력값이 더 크다면 그냥 입력
// 작다면 끄집어내고 집어넣는다. -> 오름차순이 유지된다.
// 오름차순, 내림차순을 기억해라.
// ( {  []}) 가 나온다면 거의 stack문제일 확률이 높다.

// 내 풀이
// function solution(s) {
// 	let stack = [];

// 	for (let i = 0; i < s.length; i++) {
// 		if (s[i] === '(') {
// 			stack.push(1);
// 		} else stack.pop();
// 	}
// 	if (stack.size === 0) return 'YES';
// 	else return 'NO';
// }

// 강사님 풀이
// console.log(solution('(()(()))(()')); // NO

function solution(s) {
	let stack = [];
	let answer = 'YES';
	for (let i = 0; i < s.length; i++) {
		if (s[i] === ')') {
			while (stack.pop() !== '(');
		} else stack.push(s[i]);
	}

	if (stack.length !== 0) answer = 'NO';
	return answer;
}

console.log(solution('(()(()))(()')); // NO
console.log(solution('(()())((()))')); // NO
