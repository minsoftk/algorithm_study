function solution(str) {
	let hash = new Map();
	let chs = str.split('').sort();
	let check = Array(chs.length).fill(0);
	let answer = -1;
	let temp = [];

	DFS(0);
	return answer;

	// 소문자 a가 짝수개인가?
	// 홀수 개수일때가 문제이다.
	// (s.length + 1 ) - cnt
	// cnt는 알파벳의 개수

	function DFS(L) {
		if (L >= chs.length) return;

		if (isPalindrome(temp)) {
			if (answer < temp.length) {
				answer = temp.length;
			}
		}

		for (let i = 0; i < chs.length; i++) {
			if (check[i] === 0) {
				check[i] = 1;
				temp.push(chs[i]);
				DFS(L + 1);
				check[i] = 0;
				temp.pop();
			}
		}
	}
}

function isPalindrome(strArr) {
	let temp = [...strArr].reverse().join('');
	if (strArr.join('') === temp) return true;
	return false;
}
// console.log(isPalindrome(['a', 'a', 'a', 'b', 'b', 'b', 'b', 'c', 'c', 'c']));
console.log(solution('aa'));
console.log(solution('abcbbbccaa'));

// 문자열이 주어지면 해당 문자열의 문자들을 가지고 만들 수 있는 최대길이 팰린드롬을 만들고 그 길이를 구하세요. 문자열은 소문자로만 이루어져 있습니다.
// 만약 “abcbbbccaa" 가 주어진다면 만들 수 있는 가장 긴 팰린드롬은 ”bbcaaacbb"이고 답은 9입니다.

// ▣ 입력설명
// 매개변수 s에 N(1<=N<=1,000)길이의 수열이 주어집니다.

// ▣ 출력설명
// 최대길이 팰린드롬의 길이를 반환합니다.

// ▣ 매개변수 형식 1
// “abcbbbccaa"

// ▣ 반환값 형식 1
// 9

// ▣ 매개변수 형식 2
// abcde

// ▣ 반환값 형식 2
// 1

// ▣ 매개변수 형식 3
// ccc

// ▣ 반환값 형식 3
// 3
