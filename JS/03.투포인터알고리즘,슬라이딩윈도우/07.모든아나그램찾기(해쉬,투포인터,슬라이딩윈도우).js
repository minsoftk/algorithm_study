function solution(s, m) {
	let answer = 0;
	let hash = new Map();

	// 부분 문자열을 hash에 -1로 저장하기
	// 슬라이딩 윈도우를 이용하여 아나그램을 찾는다.
	for (let x of m) {
		hash.set(x, (hash.get(x) || 0) - 1);
	}

	/* 부분 문자열의 길이 - 1을 해시에 넣는다.(이땐 value를 +1로 set을 한다.) 
	동작 후, value가 0이 되는 key값은 제거해준다.
	key가 0인 경우는 아나그램 조건인 부분 문자열 하나를 충족했다는 의미이다.
	*/
	let len = m.length - 1;
	for (let i = 0; i < len; i++) {
		//  1~(비교할 문자열의 길이 -1)
		hash.set(s[i], (hash.get(s[i]) || 0) + 1);
		if (hash.get(s[i]) === 0) hash.delete(s[i]);
	}

	/* 3번째 문자를 추가했을 때, 아나그램을 만족했다면 모든 해시 key의 value가 0이 된다.
	size=0인 경우, 아나그램 부분 문자열 개수 추가를 해준다.
	*/
	let left = 0;
	for (let right = len; right < s.length; right++) {
		// 부분문자열 마지막 개수를 해시에 등록
		hash.set(s[right], (hash.get(s[right]) || 0) + 1);
		// 만약 해시의 value가 0이 되었다면, 해시에서 삭제해준다.
		// 삭제해주는 이유는 0도 size에 포함되기 때문에 1로 카운트 된다. size가 0일때, 아나그램을 만족한다.
		if (hash.get(s[right]) === 0) hash.delete(s[right]);
		if (hash.size === 0) answer++;

		// left는 이제 비교하지 않으므로 -1을 해시에 넣어주고 증가시킨다.
		hash.set(s[left], (hash.get(s[left]) || 0) - 1);
		if (hash.get(s[left]) === 0) hash.delete(s[left]);
		left++;
	}
	return answer;
}

console.log(solution('bacacbcba', 'abc'));
console.log(solution('bacaAacba', 'abc'));
