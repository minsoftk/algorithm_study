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

// 날짜로 내림차순
// 아이스크림
function solution(nums) {
	let answer = 0;
	nums.sort((a, b) => b[1] - a[1]);
	let maxN = nums[0][1];
	let maxH = new maxHeap();
	let i = 0;
	for (let day = maxN; day >= 1; day--) {
		for (; i < nums.length; i++) {
			if (nums[i][1] < day) break;
			maxH.insert(nums[i][0]);
		}
		if (maxH.size() > 0) {
			answer += maxH.get();
		}
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
