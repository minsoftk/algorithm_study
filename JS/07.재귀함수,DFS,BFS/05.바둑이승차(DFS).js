function solution(nums, c) {
	function DFS(v, sum) {
		// sum이 c보다 크면 재귀를 끝낸다.
		if (sum > c) return;

		// v의 레벨이 끝나야되면 max 값에 최대값을 다시 저장해준다.
		if (v === nums.length) {
			max = Math.max(max, sum);
		} else {
			// sum값을 더하지 않은 경우 가지쳐준다. DFS 하나가 이진 트리 가지를 뻗는 것을 의미.
			DFS(v + 1, sum);

			// sum값을 더해준 뒤, 가지를 쳐준다.
			DFS(v + 1, sum + nums[v]);
		}
	}
	// sum에 0을 초기값으로 시작
	DFS(0, 0);
	return max;
}
console.log(solution([81, 58, 42, 33, 61], 259)); // 242
console.log(solution([34, 56, 55, 67, 33, 76, 63, 43], 379)); // 372
