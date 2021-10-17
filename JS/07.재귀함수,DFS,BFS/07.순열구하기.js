function solution(nums, m) {
	let answer = [];
	let check = []; // 방문한 node를 저장하기 위한 배열
	let tmp = []; // 방문한 node를 저장하기 위한 배열

	// 방문한 곳을 check하기 위한 배열, 0으로 초기화 한다.
	for (let i = 0; i < nums.length; i++) {
		check[i] = 0;
	}

	// DFS 시작
	function DFS(L, m) {
		if (L === m) {
			answer.push(tmp.slice());
			return;
		} else {
			// 이진 트리 부모노드에서 자식노드로 nums.length 만큼의 가지 수를 만들어준다. (3, 6, 9)
			for (let i = 0; i < nums.length; i++) {
				// check 배열을 탐색했을 때, 0인 경우는 탐색하지 않은 경우이다.
				if (check[i] === 0) {
					// tmp에 nums[i] 값을 저장한다.(answer 배열에 출력시키기 위함),
					// check 배열에 1을 입력.(중복된 값을 체크하기 위함)
					tmp.push(nums[i]);
					check[i] = 1;

					// 즉, test 케이스의 [3,6,9] 중 [3]을 방문처리하고, 또 다른 세가지의 가지수를 만들어 준다.
					DFS(L + 1);

					// DFS의 stack이 빠지고 난 이후에 실행 취소. 부모노드로 돌아간다.
					// 즉, DFS(L+1)이 return 되었을 때, DFS(L)로 되돌아간 뒤, 방문했던 값들을 되돌려준다.
					tmp.pop();
					check[i] = 0;
				}
			}
		}
	}

	// DFS 초기조건 0으로 시작
	DFS(0);
	return answer;
}

console.log(solution([3, 6, 9], 2)); // [[3, 6], [3, 9], [6, 3], [6, 9], [9, 3], [9, 6]]
