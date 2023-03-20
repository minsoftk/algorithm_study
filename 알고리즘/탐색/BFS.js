/**
 * BFS 알고리즘
 * @param {Array} arr
 * @return {Array}
 */
function BFS(graph, startNode) {
  const visited = [];
  const need_visit = [];

  need_visit.push(startNode);

  while (need_visit) {
    const front = need_visit.pop();
    if (!visited.includes(front)) {
      visited.push(front);
      need_visit.push(...graph[front]);
    }
  }

  return visited;
}
