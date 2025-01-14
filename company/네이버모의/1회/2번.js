function solution(str) {
	let check = Array(str.length).fill(0);
	let temp = [];
	let answer = 0;
	let duplicate = [];
	DFS(0);

	return answer;

	// palindrome을 만들어줘야 한다.
	// 홀수 개수를 가진 알파벳이 2개 이상일 경우는 펠린드롬이 만들어지지 않는다.
	// temp 배열을 DFS에 넘겨서 state를 넘겨준다.
	// 문자를 hashing 해야 한다.

	// 홀수개의 문자를 mid에 저장하고 odd 가 1 보다 크다면 return 0 해준다.
	// 만들어진 배열을 넘겨준다.
	function DFS(L) {
		if (L === str.length) {
			if (isPalindrome(temp) && !duplicate.includes(temp.join(''))) {
				duplicate.push(temp.join(''));
				answer += 1;
			}
			return;
		} else {
			for (let i = 0; i < str.length; i++) {
				if (check[i] === 0) {
					check[i] = 1;
					temp.push(str[i]);
					DFS(L + 1);
					check[i] = 0;
					temp.pop();
				}
			}
		}
	}
}

function isPalindrome(strArr) {
	let temp = [...strArr].reverse().join('');
	if (strArr.join('') === temp) return true;
	return false;
}

console.log(solution('aabbaa')); //3
console.log(solution('ab')); // 0
console.log(solution('bb')); // 1
console.log(solution('abcdedcbaff')); // 120
console.log(solution('ebacacabe')); // 24

// 문자열이 주어지면 해당 문자열의 문자들을 가지고 만들 수 있는 팰린드롬의 개수를 구하세요. 문자열은 소문자로만 이루어져 있습니다.
// 만약 “aabb" 가 주어진다면 만들 수 있는 만들 수 있는 팰린드롬은 ”abba", "baab"를 만들 수 있으면 답은 2입니다.

// ▣ 입력설명
// 매개변수 s에 N(1<=N<=16)길이의 수열이 주어집니다.

// ▣ 출력설명
// 만들 수 있는 팰린드롬의 개수를 반환합니다.

// ▣ 매개변수 형식 1
// “aabb"

// ▣ 반환값 형식 1
// 2

// ▣ 매개변수 형식 2
// abcde

// ▣ 반환값 형식 2
// 0

// function DFS(ret){
// 	if (ret.length === s.length){
// 		answer.push(ret.join(''));
// 	}else {
// 		for (let x of set){
// 			if (cnt[x] === 0) continue;
// 			ret.push(x);
// 			ret.unshift(x);
// 			cnt[x] -= 2;
// 			DFS(ret);
// 			ret.pop();
// 			ret.shift();
// 			cnt[x] += 2;
// 	}
// }
