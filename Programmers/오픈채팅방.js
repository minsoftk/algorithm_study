function solution(record) {
	let stateMap = {
		Enter: '님이 들어왔습니다.',
		Leave: '님이 나갔습니다.',
	};

	let log = [];
	let hash = new Map();

	for (let x of record) {
		const [state, uid, nick] = x.split(' ');
		if (state !== 'Change') {
			log.push([state, uid]);
		}
		if (nick) hash.set(uid, nick);
	}

	answer = log.map((user) => {
		return `${hash.get(user[1])}${stateMap[user[0]]}`;
	});

	return answer;
}
