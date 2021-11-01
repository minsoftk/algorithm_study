function solution(arr) {
	let answer = 0;
	let left = 0,
		right = arr.length - 1;

	let container = -1e9; // 넓이를 저장할 변수
	while (left < right) {
		let minHeight = Math.min(arr[left], arr[right]);
		container = Math.max((right - left) * minHeight, container);

		if (arr[left] >= arr[right]) right--;
		else left++;
	}
	answer = container;
	return answer;
}

console.log(solution([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
// console.log(solution('aaab', 'b')); // [3,2,1,0,1,0,0,1,2,2,1,0]
