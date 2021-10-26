function solution(n, nums, s1, s2) {
	// v가 속한 집합 번호를 반환한다.
	// 가장 중요한 부분
	function Find(v) {
		if (v === student[v]) return v;
		// 메모제이션을 이용, 집합 번호를 찾으면 각각의 student[v]에 메모이제이션을 해준다.
		else return (student[v] = Find(student[v]));
	}

	// a,b가 속한 두 집합을 하나로 합친다.
	function Union(a, b) {
		// a와 b의 집합 번호를 각각 fa, fb에 입력해준다.
		let fa = Find(a);
		let fb = Find(b);
		// 만약 a, b의 집합 번호가 같지 않다면,
		if (fa !== fb) student[fa] = fb; // b의 집합 번호를 a의 집합 번호에 넣어서 Union 해준다.
	}

	let answer = 'YES';
	let student = Array(n + 1);
	for (let i = 1; i <= n; i++) student[i] = i;

	// 입력 받은 간선을 Union 해준다.
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
