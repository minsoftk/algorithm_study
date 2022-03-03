class minHeap {
	constructor() {
		this.heap = [];
		this.heap.push(-1e9);
	}
	insert(val) {
		this.heap.push(val);
		this.upheap(this.heap.length - 1);
	}

	upheap(pos) {
		let tmp = this.heap[pos];
		// 부모 노드보다 클 경우
		while (tmp < this.heap[parseInt(pos / 2)]) {
			// insert에서 입력된 새로운 값의 idx에 부모노드의 값을 입력한다.
			// pos는 부모노드의 위치로 바뀐다.
			this.heap[pos] = this.heap[parseInt(pos / 2)];
			pos = parseInt(pos / 2);
		}
		// 부모노드보다 컸던 tmp값이 입력. 즉, 7-8  -> 8-7 과정
		this.heap[pos] = tmp;
	}
	get() {
		if (this.heap.length === 2) return this.heap.pop();
		if (this.heap.length === 1) return false;
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
			if (child < len && this.heap[child] > this.heap[child + 1]) child++;
			if (tmp <= this.heap[child]) break;
			this.heap[pos] = this.heap[child];
			pos = child;
		}
		this.heap[pos] = tmp;
	}
	size() {
		return this.heap.length - 1;
	}
}

function solution(events) {
	let answer = 0;
	let heap = new maxHeap();
	events.sort((a, b) => b[1] - a[1]);
	let maxD = events[0][1];
	let i = 0;
	for (let day = maxD; day >= 1; day--) {
		for (; i < events.length; i++) {
			if (events[i][1] < day) break;
			heap.insert(events[i][1]);
		}
		if (heap.size() > 0) {
			answer += 1;
			heap.get();
		}
	}
	return answer;
}

console.log(
	solution([
		[1, 2],
		[2, 3],
		[3, 4],
		[1, 2],
	])
); //4
console.log(
	solution([
		[1, 4],
		[4, 4],
		[2, 2],
		[3, 4],
		[1, 1],
	])
); //4

console.log(
	solution([
		[1, 1],
		[1, 2],
		[1, 3],
		[1, 4],
		[1, 5],
		[1, 6],
		[1, 7],
	])
); // 7
console.log(solution([[1, 100000]])); // 1
