function solution(arr) {
	let answer = 0;
	let ch = Array(arr.length).fill(0);
	distance = 1000;
	let cnt = 1;
	for (let i = 0; i < ch.length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
		} else {
		}
	}
	console.log(ch);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			ch[i] = distance;
			distance++;
		} else if (arr[i] < arr[i + 1]) {
			ch[i] = cnt;
			cnt++;
		}
	}
	console.log(ch);

	// // 양수 증가 부분 찾기
	// let i = 0;
	// while (arr[i] < arr[i + 1] && i < arr.length) i++;
	// if (i === 0 || i === arr.length) return 0;
	// console.log(ch);
	// for (let j = i; j < arr.length - 1; j++) {
	// 	if (arr[j - 1] < arr[j]) {
	// 		ch[j] = 0;
	// 		distance++;
	// 	} else {
	// 		ch[i] = distance;
	// 		distance++;
	// 	}
	// }

	// while (arr[i] > arr[i + 1] && i < arr.length) i++;
	// if (i !== arr.length) return 0;

	// console.log(ch);
	// distance = 1000;
	// for (let j = arr.length - 1; j >= 0; j--) {
	// 	if (arr[j - 1] > arr[j]) {
	// 		ch[i] = distance;
	// 	}
	// }
	return answer;
}
console.log(solution([3, 2, 5, 6, 4, 3, 7])); // 5
// console.log([3, 3, 3]); // 0
// console.log([1, 2, 3, 4, 5]); //0
