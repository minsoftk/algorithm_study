function solution(p, vs) {
	const vsHash = new Map(); // 승패를 기록한 hash
	const pointHash = new Map(); // 승리한 유저의 point 저장

	vs.forEach((vs) => {
		// '이긴상대:진상대' 문자열 key를 가진 hash를 만들고,
		// 이긴 횟수를 vshash에 저장
		const [winner, loser] = vs.split(':');
		vsHash.set(
			`${winner}:${loser}`,
			(vsHash.get(`${winner}:${loser}`) || 0) + 1
		);

		// 승리한 유저의 이긴 횟수를 불러와 유저 point를 계산
		// pointHash에 저장
		let temp = vsHash.get(`${winner}:${loser}`);
		pointHash.set(winner, (pointHash.get(winner) || 0) + Math.ceil(p / temp));
	});

	// 획득 포인트, 승리한 사람의 수, ID 순으로 정렬할 배열
	let res = [];

	// vsHash에서 이긴 횟수를 받아와 res 배열에 넣어준다.
	for (let [key, val] of pointHash) {
		let vicCnt = victoryCnt(key, vsHash);
		res.push([val, vicCnt, key]);
	}
	console.log(res);
	// 획득 포인트, 승리한 사람의 수
	let answer = [];
	res.sort((a, b) => {
		if (b[0] === a[0]) return b[1] - a[1];
		return b[0] - a[0];
	});

	// 만약 res의 첫번째 원소, 두번째 원소의 포인트와 승리수가 같다면
	// id 정렬 값을 반환
	if (res[0][0] === res[1][0] && res[0][1] === res[1][1]) {
		answer = [res[0][2], res[1][2]];
		answer.sort();
		return answer[0];
	}

	// 만약 포인트와 승리한 사람의 수가 같지 않다면, res의 첫번째 원소의 id를 반환
	return (answer = res[0][2]);
}

function victoryCnt(person, vsHash) {
	// 이긴 상대가 몇명인지 받아오는 함수
	let cnt = 0;
	let loserArr = []; // 진 상대를 기록한다.
	for (let [key, val] of vsHash) {
		const [winner, loser] = key.split(':');
		// a가 person과 같고 loser 목록에 없으면 push
		if (winner === person && !loserArr.includes(loser)) {
			loserArr.push(loser);
		}
	}
	// 진 사람의 길이를 반환
	return loserArr.length;
}

function solution(p, vs) {
	let answer;
	return anwer;
}

solution(4, [
	'super:lion',
	'hero:lion',
	'lion:super',
	'hero:lion',
	'hero:lion',
	'lion:super',
	'hero:lion',
	'hero:lion',
	'super:hero',
	'lion:hero',
]);

// 승부를 해서 이긴 사람과 진 사람의 경기 결과를 통해 가장 높은 포인트를 가진 사람을 찾고자 한다.
// '승자ID:패자ID'로 vs배열에 승부의 결과가 들어가 있다.
// 다만, 승부 조작의 우려가 있으므로 한 사람과 계속해서 같은 경기 결과를 가지는 사람들에게는
// 획득하는 포인트를 감소한다. 경기 결과 후 얻은 포인트는 다음과 같다. 포인트 = [p / (A가 B를 이긴 횟수)]. [x] = x보다 작지 않은 최소의 정수이다.(올림)

// 첫번째 예시를 보면 'super'는 1번째 경기, 9번째 경기에서 승리했으므로 (4+4)점 획득
// 'hero'는 2,4,5,7,8 경기에서 승리했으므로 (4+2+2+1+1)점 획득
// 2번째 [4 / 1] = 4
// 4번째 [4 / 2] = 2
// 5번째 [4 / 3] = 2
// 7번째 [4 / 4] = 1
// 8번째 [4 / 5] = 1

// 만약 획득 포인트가 같다면, 승리한 상대의 수가 많은 사람을 뽑는다.
// 'super'가 승리한 상대는 'lion, hero' 2명이다.
// 'hero'가 승리한 상대는 'lion' 한 명이다.

// 만약 승리한 상대의 수도 같다면 ID가 사전 순으로 빨리 오는 사람을 고른다.
p = 4; // 포인트
vs = [
	'super:lion',
	'hero:lion',
	'lion:super',
	'hero:lion',
	'hero:lion',
	'lion:super',
	'hero:lion',
	'hero:lion',
	'super:hero',
	'lion:hero',
];
console.log(solution(p, vs)); // result "lion"

console.log(
	solution(3, [
		'abd:aaa',
		'abd:aaa',
		'abd:aaa',
		'abc:aaa',
		'abc:aaa',
		'abc:aaa',
	])
); // "abc"
