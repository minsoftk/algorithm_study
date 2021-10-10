function solution(nums, m) {
	let answer = 0,
		sum = 0;

	let hash = new Map();
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		if (sum === m) answer++;
		// 만약 sum - m에 key를 가진다면, (sum - m) key의 value만큼
		// sum에서도 m을 만드는 방법이 존재한다는 의미. 이 부분이 생각하기 어렵다.
		if (hash.has(sum - m)) answer += hash.get(sum - m);
		hash.set(sum, (hash.get(sum) || 0) + 1);
	}
	return answer;
}

console.log(solution([1, 2, 3, -3, 1, 2], 3));
console.log(solution([-1, 0, 1], 0));
console.log(solution([-1, -1, -1, 1], 0));
