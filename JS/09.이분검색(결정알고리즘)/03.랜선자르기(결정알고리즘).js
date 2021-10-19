function solution(nums, k) {
	//nums : 랜선의 길이들이 담긴 배열, k : 랜선의 개수
	let answer;
	function count(len) {
		let cnt = 0; // len길이로 랜선을 잘라 나온 랜선의 개수
		for (let x of nums) {
			//nums배열에 들어있는 랜선의 길이 하나하나를 x에 담음
			cnt += Math.floor(x / len); // len:자를려는 길이, x라는 랜선을 len으로 나눈 몫이 그 단위로 나눠진 랜선의 개수이다.
		}
		return cnt; // nums배열에 있는 랜선의 길이를 다 len이라는 길이로 나눠 나온 랜선의 개수를 return
	}
	let left = 1; // left는 1로 선언. 랜선의 길이가 0일 순 없으니까..(근데 0으로 해줘도 상관은 x)
	let right = Math.max(...nums); // nums 배열 중 가장 큰수를 right로 해줌, 배열에 가장 작은 수로 하면 그것보다 큰수가 들어오게되면 반례가 생김.

	// left가 right보다 커지면 while문 종료(이분검색은 left,right로 배열의 범위를 정하고 mid를 구해 배열의 반토막씩 줄여나가면서 구하는 알고리즘이라 left가 right를 넘어가면 끝임)
	while (left <= right) {
		let mid = parseInt((left + right) / 2); // 배열의 양쪽 끝지점을 더해 나누기 2한 몫이 그 배열의 중앙값임
		// 만약, 현재 정한 자를려는 단위로 랜선들을 잘랐을때 나온 랜선의 개수가 k보다 크거나 같으면 문제의 조건에 충족한거임
		if (count(mid) >= k) {
			answer = mid; // 그래서 자를려는 길이를 answer에 담아두고 계속 최적의 길이를 찾기
			left = mid + 1; // 위의 자를려는 길이가 충족하니 길이를 더 늘려보기 위해 left의 위치를 현 mid+1으로 재위치시킴.
		} else right = mid - 1; // 현재 정한 자를려는 단위가 너무 커 랜선의 개수가 조건보단 적은상태. 자를려는 단위를 줄이기위해, right를 mid-1로 재위치시킴.
	}
	return answer;
}
console.log(solution([802, 743, 457, 539], 11));
//11개 이상이면 일단 답으로 해놓고 길이를 늘려서 되면 계속 답을 교체! 더 좋은 답을 찾기 위해
