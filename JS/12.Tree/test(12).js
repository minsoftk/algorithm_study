function solution(n, edges) {
	function Find(v) {
		if (v === check[v]) return v;
		else return (check[v] = Find(check[v]));
	}
	function Union(a, b) {
		let fa = Find(a);
		let fb = Find(b);
		if (a !== fb) check[fa] = fb;
	}

	let answer = 0;
	let check = Array(n + 1);
	for (let i = 1; i <= n; i++) check[i] = i;
	edges.sort((a, b) => a[2] - b[2]);
	for (let [a, b, c] of edges) {
		let fa = Find(a);
		let fb = Find(b);
		if (fa !== fb) {
			answer += c;
			Union(a, b);
		}
	}
	console.log(check);
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
