//
function solution(nums, k) {
	let max = 0;
	let sum = 0;
	let start = 0,
		end = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		end++;
		// 만약 end, start 거리가 k 보다 커지면
		//슬라이딩 윈도우
		if (end - start > k) {
			// start의 값을 빼주고 idx ++
			sum -= nums[start];
			start++;
			max = Math.max(max, sum);
		}
	}
	return max;
}

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3)); //56
console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5)); //26
console.log(solution([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4)); //342
