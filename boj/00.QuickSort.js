function quicksort(arr, left, right) {
	if (start >= end) return;

	let pivot = start;
	let L = left + 1;
	let R = right;

	while (L <= R) {
		while (L <= R && arr[L] <= arr[pivot]) {
			L += 1;
		}
		while (R > L && arr[R] >= arr[pivot]) {
			R -= 1;
		}
		if (L > R) {
			// 엇갈린 경우
			let temp = arr[pivot];
			arr[pivot] = arr[R];
			arr[R] = temp;
		} else {
			// 엇갈리지 않은 경우
			let temp = arr[R];
			arr[R] = arr[L];
			arr[L] = temp;
		}
	}
	// pivot을 제외한 나눠진 배열을 다시 quick sort
	quicksort(arr, left, R - 1);
	quicksort(arr, R + 1, right);
}
