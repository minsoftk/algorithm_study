function sol(numCourses, prerequisites) {
	const indegrees = Array(numCourses).fill(0);

	let graph = Array(numCourses + 1);
	for (let i = 0; i < graph.length; i++) graph[i] = Array();
	for (let [a, b] of prerequisites) {
		graph[a].push(b);
		indegrees[b]++;
	}

	const queue = [];
	for (let i = 0; i < numCourses; i++) {
		if (indegrees[i] === 0) queue.push(i);
	}

	let cnt = 0;

	while (queue.length) {
		const course = queue.shift();
		cnt++;
		for (const next of graph[course]) {
			indegrees[next]--;
			if (indegrees[next] === 0) {
				queue.push(next);
			}
		}
	}
	return cnt === numCourses;
}

console.log(
	sol([
		[1, 0],
		[0, 1],
	])
); // false
