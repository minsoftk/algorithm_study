class maxHeap {
	constructor() {
		this.heap = [];
		this.heap.push(Number.MAX_SAFE_INTEGER);
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
		if (this.heap.length === 2) {
			return this.heap.pop();
		}
		let res;
		res = this.heap[1];
		this.heap[1] = this.heap.pop();
		this.downheap(1, this.heap.length - 1);
		return res;
	}
	downheap(pos, len) {
		let tmp, i;
		tmp = this.heap[pos];
		while (pos <= parseInt(len / 2)) {
			i = pos * 2;
			if (i < len && this.heap[i] < this.heap[i + 1]) i++;
			if (tmp >= this.heap[i]) break;
			this.heap[pos] = this.heap[i];
			pos = i;
		}
		this.heap[pos] = tmp;
	}
	size() {
		return this.heap.length - 1;
	}
	top() {
		return this.heap[1];
	}
}
function solution(tasks) {
	let answer = 0;
	tasks.sort((a, b) => a[1] - b[1]);
	let maxH = new maxHeap();
	let time = 0;
	for (let x of tasks) {
		if (time + x[0] <= x[1]) {
			maxH.insert(x[0]);
			time += x[0];
		} else if (maxH.size() > 0 && maxH.top() > x[0]) {
			time += x[0] - maxH.get();
			maxH.insert(x[0]);
		}
	}
	answer = maxH.size();
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
