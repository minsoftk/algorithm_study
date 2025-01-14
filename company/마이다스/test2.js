function solution(n, arr) {
	arr.sort((a, b) => a[0] - b[0]);
	console.log('here ', arr);

	// 이동횟수
	let cnt = 0;
	for (let i = 1; i < arr.length; i++) {
		// 겹치는 조건을 만족하면
		if (checkBorder(arr[i - 1], arr[i])) {
		} else {
			return 0;
		}
	}

	function checkBorder(arr1, arr2) {
		let [x1, y2, x2, y1] = arr1;
		let [xx1, yy2, xx2, yy1] = arr2;
		if (
			(x1 <= xx1 && xx1 <= x2) ||
			(x1 <= xx2 && xx2 <= x2) ||
			(y1 <= yy1 && yy1 <= y2) ||
			(y1 <= yy2 && yy2 <= y2)
		) {
			return true;
		} else return false;
	}
}

console.log(
	solution(3, [
		[5, 7, 6, 6],
		[3, 9, 5, 4],
		[8, 2, 7, 6],
	])
);
// 1
