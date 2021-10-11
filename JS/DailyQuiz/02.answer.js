function solution(arr) {
	let answer = 0;
	let n = arr.length;
	let dist = Array.from({ length: n }, () => 0);
	let ch = Array.from({ length: n }, () => 0);
	ch[0] = 1;
	let d = 1;
	for (let i = 1; i < n; i++) {
		if (arr[i - 1] < arr[i]) {
			d++;
			dist[i] = d;
		} else {
			d = 1;
			ch[i] = 1;
		}
	}
	d = 1;
	ch[n - 1] = 1;
	for (let i = n - 2; i >= 0; i--) {
		if (arr[i] > arr[i + 1]) {
			d++;
			dist[i] += d;
			if (ch[i] === 0) answer = Math.max(answer, dist[i] - 1);
		} else {
			d = 1;
			ch[i] = 1;
		}
	}
	return answer;
}
//console.log(solution([1, 2, 2, 2, 1])); //0
//console.log(solution([2, 1, 4, 7, 3, 2, 5])); //5
//console.log(solution([1, 2, 1, 2, 3, 4, 5])); //3
//console.log(solution([10, 10, 9, 2, 1, 5, 5])); //0
//console.log(solution([1, 2, 3, 4, 2, 5, 7, 4, 3, 2, 1, 3])); //7
//console.log(solution([1, 1, 1, 1, 1])); //0
//console.log(solution([5, 4, 3, 2, 1])); //0
//console.log(solution([10, 10, 9, 2, 1, 5, 4])); //3
//console.log(solution([2, 2, 9, 9, 1, 5, 5])); //0
//console.log(solution([10, 8, 9, 2, 2, 2, 2])); //3
