function solution(numbers, target) {
	let answer = 0;
	let sum = 0;
	let cnt = 0; // target을 만드는데 성공한 가지 수 저장 변수

	// DFS 시작
	function DFS(L, sum) {
		if (L === numbers.length) {
			// 만약 Level이 0 ~ numbers.length - 1 이후일 때.
			if (sum === target) {
				// sum과 target이 같다면 가지 수 +1
				cnt++;
			}
		} else {
			// 이진트리 부모에서 numbers[L]을 더해주는 왼쪽 자식 생성
			// index엔 L을 넣어준다. for문 써야되는 순열이나 조합이랑 구별 잘하기.
			DFS(L + 1, sum + numbers[L]);

			// 루트 노드에서 number[L] 만큼의 값을 빼서 오른쪽 자식 노드 생성
			DFS(L + 1, sum - numbers[L]);

			// 이후에 이진 트리에서 if문에 설정한 L까지 모든 조건을 탐색한다.
		}
	}

	// Level은 0부터 시작, 타겟넘버와 비교를 위한 sum을 0으로 입력
	DFS(0, 0);
	answer = cnt;
	return answer;
}
