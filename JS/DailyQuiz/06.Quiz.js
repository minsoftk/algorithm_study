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
		// 부모 노드보다 클 경우
		while (tmp > this.heap[parseInt(pos / 2)]) {
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

function solution(nums) {
	let answer = 0;

	nums.sort((a, b) => {
		if (a[0] === b[0]) return a[1] - b[1];
		return a[0] - b[0];
	});

	let heap = new maxHeap();
	let sum = 0;
	let cnt = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i][0];

		if (sum <= nums[i][1] && nums[i][0] <= nums[i][1]) {
			// heap.insert(nums[i][1]);
			cnt++;
		} else {
			sum -= nums[i][0];
		}
		console.log(sum);
	}
	answer = cnt;
	return answer;
}

console.log(
	solution([
		[3, 11],
		[5, 10],
		[3, 10],
		[2, 10],
		[4, 12],
	])
); //4
console.log(solution([[1, 2]])); //1
console.log(
	solution([
		[3, 2],
		[4, 3],
	])
); //0
console.log(
	solution([
		[3, 11],
		[5, 10],
		[3, 10],
		[2, 10],
		[4, 12],
		[5, 15],
		[3, 17],
	])
); //5
console.log(
	solution([
		[7, 11],
		[6, 10],
		[3, 10],
		[2, 10],
		[1, 12],
	])
); //3
