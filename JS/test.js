class maxHeap {
	constructor() {
		this.heap = [];
		this.heap.push(1e9);
	}
	insert(val) {
		this.heap.push(val);
		this.upheap(this.heap.length - 1);
	}

	upheap(pos) {
		let tmp = this.heap[pos];
		while (tmp > this.heap[parseInt(pos / 2)]) {
			this.heap[pos] = this.heap[parseInt(pos / 2)];
			pos = parseInt(pos / 2);
		}
		this.heap[pos] = tmp;
	}
	get() {
		if (this.heap.length === 2) return this.heap.pop();
		let res = this.heap[1];
		this.heap[1] = this.heap.pop();
		this.downheap(1, this.heap.length - 1); // pos는 마지막 부모까지만 내려가야 한다.
		return res;
	}
	downheap(pos, len) {
		let tmp = this.heap[pos],
			child;
		while (pos <= parseInt(len / 2)) {
			child = pos * 2;

			// 왼쪽 자식이 더 큰가 오른쪽 자식이 더 큰가
			// len보다는 작아야 한다.
			if (child < len && this.heap[child] < this.heap[child + 1]) child++;
			if (tmp >= this.heap[child]) break;
			this.heap[pos] = this.heap[child];
			pos = child;
		}
		this.heap[pos] = tmp;
	}
	size() {
		return this.heap.length - 1;
	}
}

// 날짜로 내림차순 한다! 3일은 1,2,3, 모두 가능하기 때문.
// 아이스크림 문제도 풀어보기
function solution(nums) {
	let answer = 0;
	nums.sort((a, b) => b[1] - a[1]);
	// 정할 수 있는 일수를 저장 (3일이면 3일안에 어떤 날도 가능하다.)
	let maxD = nums[0][1];
	let maxH = new maxHeap();

	// 탐색을 위한 i를 따로 선언
	/* day 3일부터 시작한다. 2번째 for문에서는 내림차순 정렬된 nums 배열이기에, 3일을 가진 스케쥴만 탐색
	 그러다 2일을 만나면 break된다. i를 따로 선언하지 않았다. 그래서 2번째 for문으로 다시 돌아왔을때, 2일부터 탐색하는
	 i번째 idx를 기억하고 있다. 따라서 3일의 강연료를 max Heap에 삽입. 최대값을 뽑아낸다. 그러면 3일의 다음 최대값이 정렬된다.
	 이후 day=2인 값들을 탐색하고 처음의 3일 강연료의 최대값을 뺐다. 최대값이 빠진 3일 강연료와 day가 2인 강연료들의 최대값을 또 구한다! 
	 이게 핵심.
	*/
	let i = 0;
	for (let day = maxD; day > 0; day--) {
		for (; i < nums.length; i++) {
			if (nums[i][1] < day) break;
			maxH.insert(nums[i][0]);
		}
		if (maxH.size() > 0) answer += maxH.get();
	}
	return answer;
}

console.log(
	solution([
		[50, 2],
		[20, 1],
		[40, 2],
		[60, 3],
		[30, 3],
		[30, 1],
	])
); // 150
console.log(
	solution([
		[50, 2],
		[40, 2],
		[20, 1],
		[10, 1],
	])
); // 90
