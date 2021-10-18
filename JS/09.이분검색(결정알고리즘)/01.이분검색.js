// 자료는 정렬되어 있어야 한다.
// 절반으로 쪼개지기 때문에 log n이다.
function solution(nums, m) {
	let answer;

	// 이분 검색의 조건은 정렬이 우선적으로 되어 있어야 한다.
	// 문제에서 오름차순으로 정렬한 다음 N개의 수중 한 개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구해야 한다.
	nums.sort((a, b) => a - b);

	// left, right의 index를 정해준다.
	let lt = 0,
		rt = nums.length - 1;

	// left가 right를 넘어설 때까지 반복한다.
	while (lt <= rt) {
		// left와 right의 중간 값을 정해준다. 이분 검색을 위해! O(log N)
		let mid = parseInt((lt + rt) / 2);

		// 만약 nums의 mid index 값이 m과 같다면
		if (nums[mid] === m) {
			// mid의 위치를 반환해야하므 +1을 한 값을 return
			answer = mid + 1;
			break;

			// nums[mid]의 값이 m보다 크다면, mid보다 큰 부분은 버린다. 즉, 오른쪽을 버린다.
		} else if (nums[mid] > m) rt = mid - 1;
		// 만약 그 반대라면 nums[mid]가 m보다 더 작은 경우니깐 왼쪽을 버려준다.
		else lt = mid + 1;
	}
	return answer;
}
console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32)); // 3
