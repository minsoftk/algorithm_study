function solution(n, f) {
	let answer,
		flag = 0;
	let dy = Array.from(Array(11), () => Array(11).fill(0)); // 조합의 경우의 수를 넣을 배열
	let ch = Array.from({ length: n + 1 }, () => 0); // 그 노드를 들렸는지에 대한 check를 하기 위해 배열 생성. 배열의 값을 0으로 초기화 (들렸으면 1로 값 바꿈)
	let b = [],
		queue = []; // b는 맨 앞줄 각 숫자의 계수를 담을 곳, queue는 그 계수를 통해 구해진 1부터 n까지의 숫자를 담을 배열

	// 맨 앞줄 계수 구하는 함수 정의
	function comb(n, r) {
		if (dy[n][r] > 0) return dy[n][r]; //구했던 값들은 다시 구할 필요 없으니까 값 return(메모제이션)
		if (n === r || r === 0) return 1;
		// n===r 또는 r===0인 경우는 한 경우밖에 없으니 1 return
		else return (dy[n][r] = comb(n - 1, r - 1) + comb(n - 1, r)); // 재귀함수로 계수를 함
	}

	function DFS(l, sum) {
		if (flag) return; // flag가 true(1)이면 이전 함수 중단된 부분으로 돌아가기
		// l===n이면 queue에 1부터 n까지 들어 있는거임
		if (l === n) {
			// sum===f 되는순간 원하는 값 찾은것이니까
			if (sum === f) {
				answer = queue.slice(); // queue 배열에 넣었던 값을 answer에 넣기
				flag = 1; // 재귀함수라면 이전 함수로 돌아가기 위해 flag 값을 1로 해줌 (앞으로 가봤자 이미 탐색했던거니까..)
			}
		} else {
			// n은 1부터 시작하니까 i=1부터 n까지 for문 돌기
			for (let i = 1; i <= n; i++) {
				// 그 수의 check배열 값이 0이면 아직 확인하지 않은 것.
				if (ch[i] === 0) {
					ch[i] = 1; // 그 수를 queue에 넣어 확인했으면 다시 할 필요없으니 check배열 값을 1로 주기
					queue.push(i); // queue에 값 넣기
					DFS(l + 1, sum + b[l] * queue[queue.length - 1]); // b와 queue 인덱스 같은것끼리 곱하여 sum에 더해주면서 f값 찾기
					ch[i] = 0; // 숫자와 계수가 맞지 않는다면 그 수의 check배열 값을 다시 0으로 주어 그 수와 옳바른 계수가 곱해지게끔 하기 위해
					queue.pop(); // 원하는 값이 아니니 queue의 맨 앞 원소를 빼, 1부터 n까지 위치를 바꿔가며 원하는 값을 찾기 위해
				}
			}
		}
	}
	for (let i = 0; i < n; i++) b.push(comb(n - 1, i)); // 메모이제이션을 하며 앞 줄 숫자의 계수를 b배열에 넣는다.
	DFS(0, 0); // DFS 함수 시작
	return answer;
}
console.log(solution(4, 16));
