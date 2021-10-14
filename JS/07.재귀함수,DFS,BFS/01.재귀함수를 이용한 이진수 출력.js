// 재귀함수에서는 무조건 if - else로 생각해라.
// if는 종착점, else는 돌릴

function solution(n) {
	let answer;
	function DFS(L) {
		if (L == 0) return;
		else {
			DFS(parseInt(n / 2));
			console.log(n % 2);
		}
	}
	DFS(3);
}

console.log(solution(11)); // 1011
