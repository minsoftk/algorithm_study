function solution(participant, completion) {
	var answer = '';

	let hash = new Map();
	for (let i = 0; i < participant.length; i++) {
		hash.set(participant[i], (hash.get(participant[i]) || 0) + 1);
	}
	for (let i = 0; i < completion.length; i++) {
		if (hash.has(completion[i]))
			hash.set(completion[i], hash.get(completion[i]) - 1);
		if (hash.get(completion[i]) === 0) hash.delete(completion[i]);
	}
	console.log(hash);
	for (let [key, value] of hash) {
		answer = key;
	}
	return answer;
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); //"leo"
console.log(
	solution(
		['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
		['josipa', 'filipa', 'marina', 'nikola']
	)
); // "vinko"
console.log(
	solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
); //"mislav"
