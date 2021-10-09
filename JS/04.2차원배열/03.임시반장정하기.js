function solution(students) {
	// let ch = Array(students.length);
	// for (let i = 0; i < students.length; i++) {
	// 	ch[i] = Array(students.length).fill(0);
	// }
	// console.log(ch);

	let answer = 0;
	let max = -2147000000;
	let cnt = 0;
	for (let i = 0; i < students.length; i++) {
		for (let j = 0; j < students.length; j++) {
			cnt = 0;
			for (let k = 1; k < students.length; k++) {
				if (students[i][k] === students[j][k]) cnt++;
			}
		}
		answer = Math.max(max, cnt);
	}
	return answer;
}
/*
같다를 붙였을 때?
 if (cnt > max){
	max=cnt;
	answer=i;
}
*/

console.log(
	solution([
		[2, 3, 1, 7, 3],
		[4, 1, 9, 6, 8],
		[5, 5, 2, 4, 4],
		[6, 5, 2, 6, 7],
		[8, 4, 2, 2, 2],
	])
);
