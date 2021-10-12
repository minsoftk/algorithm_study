// 3개 이하의
function solution(nums, k) {
	let answer = 0;
	function counting(k) {
		let left = 0;
		let odd = 0;
		let sum = 0;
		for (let right = 0; right < nums.length; right++) {
			if (nums[right] % 2 === 1) odd++;
			while (odd > k) {
				if (nums[left] % 2 === 1) odd--;
				left++;
			}
			sum += right - left + 1;
		}
		return sum;
	}
	// k개이하가 되는 부분수열의 개수를 구한다.
	answer = counting(k) - counting(k - 1);
	return answer;
}
console.log(solution([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)); //16
console.log(solution([1, 1, 2, 1, 1], 3)); //2
console.log(solution([2, 4, 6], 1)); //0
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)); //12
console.log(solution([1, 3, 5, 7, 9, 11, 13], 3)); //5
console.log(solution([1, 2, 4, 5, 7, 8, 12, 14, 16, 17, 19], 2)); //22
console.log(solution([3], 1)); //1
console.log(solution([1, 1, 1, 1, 1], 1)); //5
console.log(solution([2, 2, 2, 2, 2, 2, 2, 1], 1)); //8
console.log(solution([2, 2, 1, 2, 2, 6], 1)); //12

function solution(nums, k) {
	let answer = 0;
	let cnt = 0;
	let nH = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] % 2 === 1) cnt++;

		if (cnt === k) answer++;
		if (nH.has(cnt - k)) answer += nH.get(cnt - k);
		nH.set(cnt, nH.get(cnt) + 1 || 1);
	}
	return answer;
}
console.log(solution([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)); //16
console.log(solution([1, 1, 2, 1, 1], 3)); //2
console.log(solution([2, 4, 6], 1)); //0
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)); //12
console.log(solution([1, 3, 5, 7, 9, 11, 13], 3)); //5
console.log(solution([1, 2, 4, 5, 7, 8, 12, 14, 16, 17, 19], 2)); //22
console.log(solution([3], 1)); //1
console.log(solution([1, 1, 1, 1, 1], 1)); //5
console.log(solution([2, 2, 2, 2, 2, 2, 2, 1], 1)); //8
console.log(solution([2, 2, 1, 2, 2, 6], 1)); //12
