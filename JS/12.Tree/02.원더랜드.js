// 트리가 node가 n개면 간선의 개수는 n-1
// 그래프는 사이클이 있다. 트리는 사이클이 존재할 수 없다.
// 그래프에서 트리를 뽑아낸다.
//트리에서 그룹화를 시키면 Union화를 시켜라.
function solution(n, edges) {
	// 가장 중요한 부분
	function Find(v) {
		if (v === unf[v]) return v;
		else return (unf[v] = Find(unf[v]));
	}
	function Union(a, b) {
		let fa = Find(a);
		let fb = Find(b);
		if (a !== fb) unf[fa] = fb;
	}

	let answer = 0;
	let unf = Array.from({ length: n + 1 }, (v, i) => i);
	edges.sort((a, b) => a[2] - b[2]);
	for (let [a, b, c] of edges) {
		let fa = Find(a);
		let fb = Find(b);
		if (a !== b) {
			answer += c;
			unf[fa] = fb;
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
);
