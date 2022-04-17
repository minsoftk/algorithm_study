function solution(s) {
	let min_len = 1e9;
	for (let cnt = 1; cnt <= Math.ceil(s.length / 2); cnt += 1) {
		let temp = '';
		let i = 0;
		// s 문자열 시작
		// i 번에서부터 시작하는 문자열의 수만큼 cnt를 더해서 j를 정의
		while (i < s.length) {
			let str = s.substr(i, cnt);
			let j = i + cnt; // 자르는 문자열의 개수만큼 더해서 j 정의
			let count = 1; // 일치하는 문자의 개수

			// 일치하는 문자열을 발견하면 cnt만큼 j에 더해준다.
			// 일치하지 않으면 break
			while (j < s.length) {
				let str2 = s.substr(j, cnt);
				if (str === str2) count += 1;
				else break;
				j += cnt;
			}

			// count가 1 이상일 경우만 count를 붙여준다.
			// i 인덱스에 j를 넣어줘 j번부터 다시 문자열을 탐색
			temp += count === 1 ? str : count + str;
			i = j;
		}
		// 만약 min_len보다 작다면 최신화
		if (temp.length < min_len) min_len = temp.length;
	}
	return min_len;
}
