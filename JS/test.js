function solution(nums, k) {
	let answer = 0;
	let hash = new Map();
	let cnt = 0;

	let left = 0;
	for (let right = 0; right < nums.length; right++) {
		hash.set(nums[right], (hash.get(right) || 0) + 1);

		// 해시의 홀수의 개수 판단
		cnt = 0;
		let total_key = 0;
		for (let [key, val] of hash) {
			if (key % 2 == 1 && val >= 1) {
				cnt += val;
				total_key++;
			}
		}

		//홀수의 총 val이 ghftnfkaus
		if (cnt % 2 == 1) answer++;
		//1.
		// cnt가 0일때 홀수 k개
		// if (nums[left] % 2 == 1) hash.set(nums[left], (hash.get(left) || 0) + 1);
		// if (total_key >= k) hash.set(nums[left], (hash.get(left) || 0) - 1);
		// left++;

		//2.
		//만약 k보다 많다면 left 해시 값 빼주고 idx 증가
		if (total_key >= k) hash.set(nums[left], (hash.get(nums[left]) || 0) - 1);

		//3.
		//홀수개의 개수가 k보다 작아질 때까지 해시 -1 해주기

		left++;
	}

	return answer;
}

console.log(solution([1, 2, 1, 1, 2], 2)); //5
console.log(solution([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)); //16
console.log(solution([2, 4, 6], 1)); //0
