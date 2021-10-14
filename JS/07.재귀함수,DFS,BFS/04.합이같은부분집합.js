function solution(nums) {
	let answer = 'NO',
		flag = 0; // 서로소 집합을 가지고 있는지 유무

	// 입력 받은 값들의 총합
	let total = 0;
	for (let i = 0; i < nums.length; i++) {
		total += nums[i];
	}

	// DFS 시작
	function DFS(L, sum) {
		// 만약 sum 값이 total/2 보다 크다면 같지 않으므로 return 처리.
		if (sum > total / 2) return;

		// flag가 true인 경우에는 서로소 집합이 존재하므로 return 해준다.
		if (flag) return;

		// [3, 9, 11, 13]의 경우
		// D(0) : 3, D(1) : 9, D(2) : 11, D(3) : 13 이므로 D(4)로 갔을땐 return 해줘야 한다.
		if (L === nums.length) {
			// 재귀가 끝나는 조건에서는 sum, total-sum이 같다면 서로소 집합
			if (sum === total - sum) {
				answer = 'YES';
				flag = 1; // 서로소 집합 flag 1로 바꿔서 더 효율적인 연산을 도와준다.
			}
		} else {
			// 이진 트리로 생각하면 편하다 [3]을 더할거면 왼쪽 자식 노드로, 더하지 않을꺼면 오른쪽 자식 노드로라는 의미이다.
			DFS(L + 1, sum + nums[L]); // 현재 idx 값을 sum에 더해준 노드.
			DFS(L + 1, sum); // 더하지 않는 노드
		}
	}
	// L을 0부터 입력해주고, sum도 0으로 시작해준다.
	DFS(0, 0);
	return answer;
}
console.log(solution([1, 3, 5, 6, 7, 10])); // YES
console.log(solution([5, 2, 6, 9, 10, 12])); // YES
console.log(solution([3, 9, 11, 13])); // NO
