const { setDefaultResultOrder } = require('dns');
const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// console.log(input);
let n = Number(input[0].trim());
// console.log(n);

let arr = input
	.slice(1, n + 1)
	.map((elem) => elem.trim().split(' ').map(Number));
// console.log(arr);

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

// day가 같은 경우가 있으므로 내리차순 정렬을 해준다.
arr.sort((a, b) => {
	if (a[1] === b[1]) return b[0] - a[0];
	else return b[1] - a[1];
});

// console.log(arr);

if (n === 0) {
	console.log(0);
	return;
}

// day를 내림차순으로 해준다. idx를 기준으로 탐색한다.
let heap = new maxHeap();
let maxPay = 0;
let idx = 0;
for (let day = arr[0][1]; day >= 1; day--) {
	for (let i = idx; i < n; i++) {
		if (arr[i][1] === day) {
			heap.insert(arr[i][0]);
			idx += 1;
		} else break;
	}
	// console.log(heap);
	if (heap.size() > 0) maxPay += heap.get();
}
console.log(maxPay);
