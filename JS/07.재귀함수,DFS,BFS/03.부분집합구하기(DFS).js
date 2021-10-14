function solution(n) {
	let answer = [];

	let tmp = [];

	function DFS(v) {
		if (v === n + 1) {
			//원소가 1부터 시작하기 떄문에  n+1
			if (tmp.length !== 0)
				// 이 처리 하지 않으면 값이 없을 떄도 slice 처리되어 마지막에 청답에 빈 배열 하나 추가됨
				return answer.push(tmp.slice());
		} else {
			// 가지치기 즉 뻗어가는 애들(사용되는 애들)을 생성해주는 부분이라고 보자
			tmp.push(v); // 사용하는 원소라면 tmp  push
			DFS(v + 1); // 그 다음 원소를 검사하기 위해 +1 재귀함수 실행
			tmp.pop(); // 벡트래킹으로 부분집합으로 사용하지 않는 원소는 tmp에서 제거
			DFS(v + 1); // 그 원소가 사용되는지 검사 하기위한 재귀함수 실행
		}
	}
	DFS(1); // 재귀함수의 시작
	return answer;
}

console.log(solution(3));
