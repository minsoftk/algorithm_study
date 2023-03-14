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
	let heap = new minHeap();

	events.sort((a, b) => a[1] - b[1]);
	let end = events[events.length - 1][1];
	// 끝 부분 초기화

	events.sort((a, b) => b[0] - a[0]);
	let start = events[events.length - 1][0];

	console.log(events);
	// 시작 부분 초기화
	// 시작 부분 초기화한대로 events 진행

	for (let i = start; i <= end; i++) {
		// 시작부터 끝까지
		while (events.length && events[events.length - 1][0] === i) {
			// 현재 날짜에 시작하는 기간을 전부 넣어줌
			heap.insert(events.pop()[1]);
		}
		let tmp = heap.get();
		// 기준값 하나 빼줌
		while (heap.size() && tmp < i) tmp = heap.get();
		// 마감이 가장 빠른 기간이지만, 마감이 지난 것일 경우, 다시 빼줌(while)
		if (tmp >= i) answer++;
		// 기간에 부합할 경우에만 개수 증가
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
