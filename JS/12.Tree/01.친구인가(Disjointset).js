function solution(n, nums, s1, s2) {
	let answer = 'YES';
	let unf = Array.from({ length: n + 1 }, (v, i) => i);

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
	for (let [a, b] of nums) {
		Union(a, b);
	}
	if (Find(s1) !== Find(s2)) return 'NO';
	return answer;
}
console.log(
	solution(
		9,
		[
			[1, 2],
			[2, 3],
			[3, 4],
			[1, 5],
			[6, 7],
			[7, 8],
			[8, 9],
		],
		3,
		8
	)
); // NO
