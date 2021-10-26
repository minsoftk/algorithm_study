// 트리가 node가 n개면 간선의 개수는 n-1
// 그래프는 사이클이 있다. 트리는 사이클이 존재할 수 없다.
// 그래프에서 트리를 뽑아낸다.
//트리에서 그룹화를 시키면 Union화를 시켜라.
function solution(n, edges) {
	// v가 속한 집합 번호를 반환한다.
	// 가장 중요한 부분
	function Find(v) {
		if (v === check[v]) return v;
		// 메모제이션을 이용, 집합 번호를 찾으면 각각의 check[v]에 메모이제이션을 해준다.
		else return (check[v] = Find(check[v]));
	}

	// a,b가 속한 두 집합을 하나로 합친다.
	function Union(a, b) {
		// a와 b의 집합 번호를 각각 fa, fb에 입력해준다.
		let fa = Find(a);
		let fb = Find(b);
		// 만약 a, b의 집합 번호가 같지 않다면,
		if (fa !== fb) check[fa] = fb; // b의 집합 번호를 a의 집합 번호에 넣어서 Union 해준다.
	}

	let answer = 0;
	let check = Array.from({ length: n + 1 }, (v, i) => i);

	// 최소 비용을 구하기 위해 sort를 해준다.
	edges.sort((a, b) => a[2] - b[2]);
	// edge에서 각각의 집합 번호를 찾고
	for (let [a, b, c] of edges) {
		let fa = Find(a);
		let fb = Find(b);
		// 집합이 같지 않을 경우 최소 간선의 비용을 더해주고 Union을 해준다.
		if (fa !== fb) {
			answer += c;
			Union(a, b);
		}
	}
	return answer;
}

console.log(
	solution(9, [
		[1, 2, 12],
		[1, 9, 25],
		[2, 3, 10],
		[2, 8, 17],
		[2, 9, 8],
		[3, 4, 18],
		[3, 7, 55],
		[4, 5, 44],
		[5, 6, 60],
		[5, 7, 38],
		[7, 8, 35],
		[8, 9, 15],
	])
); // 196
