// 재귀함수에서는 무조건 if - else로 생각해라.
// if는 종착점, else 다시 돌릴 조건들

function solution(n) {
	function DFS(L) {
		if (L === 0) return;
		else {
			console.log(L % 2);
			DFS(parseInt(L / 2));
		}
	}
	DFS(n);
}
solution(20);
