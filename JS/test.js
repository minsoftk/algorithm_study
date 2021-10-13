function solution2(s, m) {
	let answer = 0;
	let q = Array(21);
	// 21의 크기를 가진 배열 생성
	// 단어의 최대 길이가 20이기 때문에 20을 포함하는 21로 생성
	// 0번 인덱스는 사용하지 않음
	for (let i = 1; i < 21; i++) {
		q[i] = Array();
	}
	// 각 배열을 2차원 배열로 만들어줌
	// 각 2차원 배열의 인덱스는 단어의 길이를 나타내고 배열의 원소는 해당 단어의 인덱스 번호

	for (let i = 0; i < s.length; i++) {
		// 문자열 배열 순회
		const len = s[i].length;
		// 반복적으로 사용하는 s[i].length를 상수로 선언
		// 상수로 선언한 이유: 반복문 안에서 변경되지 않을 것이고 변경되지 않아야 하기 때문
		// 상수인데 소문자로 쓰는 이유: https://ko.javascript.info/variables
		while (q[len].length && i - q[len][0] > m) {
			// q[len].length의 의미: 현재 문자열의 길이에 해당하는 큐 배열의 길이를 가져옴
			// q[len].length가 가질 수 있는 값: 0(false)과 나머지 값(true)
			// q[len].length가 0이면 false임으로 && 뒤의 조건문을 보지 않고 while문을 종료
			// 즉, 현재 문자열과 같은 길이를 가진 문자열 큐가 비어있으면 while문을 종료
			// i - q[len][0] > m의 의미: 현재 인덱스와 큐의 가장 앞의 값을 비교하여 m 보다 차이가 큰 지 확인
			// m 보다 차이가 크다면 좋은 단어 쌍이 아니기 때문에 큐의 가장 앞의 값을 pop 해주어야함
			// 현재 인덱스와 큐의 가장 앞의 값의 차이가 m이하면 좋은 단어 쌍이기 때문에 while문을 종료
			// 가장 앞의 값만 비교해도 되는 이유: s 배열을 0번 인덱스부터 차례대로 방문하고 있고 큐는 FIFO(First-in, First-out) 자료구조이기 때문에 가장 앞의 원소가 현재 원소와 가장 큰 차이를 가짐
			q[len].shift();
		}
		answer += q[len].length;
		// while 문의 작업이 끝나면 현재 단어 길이와 같은 길이를 갖는 단어들이 q[len]에 저장되어 있기 때문에 해당 큐의 길이를 answer 변수에 추가
		q[len].push(i);
		// 현재 문자열의 인덱스를 해당하는 큐에 삽입
		// push하는 구문이 answer 변수에 값을 추가하는 구문 위로 가게 되면 (현재 단어, 현재 단어) 쌍이 좋은 단어 쌍에 포함되기 때문에 순서를 잘 지켜야함
	}
	return answer;
}
console.log(solution2(['back', 'seen', 'big', 'good', 'size'], 2)); // 3
console.log(solution2(['back', 'seen', 'good', 'size'], 2)); // 5
