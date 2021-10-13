// 항상 stack의 상단의 것과 비교한다.
// 최상단의 값과 비교해서 입력값이 더 크다면 그냥 입력
// 작다면 끄집어내고 집어넣는다. -> 오름차순이 유지된다.
// 오름차순, 내림차순을 기억해라.
// ( { []}) 가 나온다면 거의 stack문제일 확률이 높다.

//거꾸로 집어넣는다.
// 내림차순 이용

// stack에 들어있는 값 이용
// 간단한거 같은데 이해가 좀 어려움.

function solution(nums) {
	let n = nums.length;
	let answer = Array(n).fill(0);
	let stack = [];
	for (let i = n - 1; i >= 0; i--) {
		while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
			answer[stack.pop()] = i + 1;
		}
		stack.push(i);
	}
	return answer;
}
console.log(solution([50, 57, 52, 53, 51])); // [0, 0, 2, 2, 4]+
console.log(solution([50, 46, 55, 76, 65, 50, 55, 53, 55, 50])); // [0, 1, 0, 0, 4, 5, 5, 7, 5, 9]

// 왜 O(n)인가?
