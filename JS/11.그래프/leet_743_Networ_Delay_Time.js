/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
class minHeap {
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
var networkDelayTime = function (times, n, k) {
	let distance = Array(n + 1).fill(1e9); // 노드들의 거리 정보 배열
	let minH = new minHeap();
	let graph = Array(n + 1);
	for (let i = 0; i < graph.length; i++) {
		graph[i] = Array();
	}

	// 간선 정보 인접그래프 입력
	for (let [a, b, c] of times) {
		graph[a].push([b, c]);
	}

	// 문제에서 시작 노드 k를 지정해줬다.
	distance[k] = 0;
	minH.insert([k, 0]);
	while (minH.size() > 0) {
		// 첫번째 노드의 정보 저장
		let [now, time] = minH.get();
		// 연결된 간선의 노드 정보에서 now,next 노드의 가중치를 입력.
		// 연결된 간선의 정보를 min heap에 저장한다. (그러면 time이 가장 작은 값이 root)
		for (let [next, nextTime] of graph[now]) {
			if (time + nextTime < distance[next]) {
				distance[next] = time + nextTime;
				minH.insert([next, distance[next]]);
			}
		}
	}
	// 모든 노드에 신호를 보내기까지 걸린 시간을 return
	let max = 0;
	for (let i = 1; i < distance.length; i++) {
		max = Math.max(distance[i], max);
	}
	// 만약 max가 초기값이면 모든 노드에 도달하지 않았다. -1을 return.
	if (max === 1e9) return -1;
	return max;
};
