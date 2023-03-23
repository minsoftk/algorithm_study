const arr = [
  ['A', 2],
  ['B', 5],
  ['C', 1],
  ['D', 7],
];

const queue = arr.slice();

queue.sort((a, b) => {
  return a[1] - b[1];
});

// 0 : A
const graph = [
  [
    [1, 8],
    [2, 1],
    [3, 2],
  ],
  [],
  [
    [1, 5],
    [3, 2],
  ],
  [
    [4, 3],
    [5, 5],
  ],
  [[5, 1]],
  [[0, 5]],
];

function dijk(graph, start) {
  const distances = Array(graph.length).fill(Infinity);
  let queue = [];
  distances[start] = 0;
  queue.push([start, distances[start]]);

  while (queue.length) {
    const [curNode, curDistance] = queue.shift();
    // console.log('curNode, curDistance:', curNode, curDistance);

    if (distances[curNode] < curDistance) continue;
    const nextPath = graph[curNode].sort((a, b) => a[1] - b[1]);

    for (let [nextNode, weight] of nextPath) {
      // console.log('nextNode, weight:', nextNode, weight);
      const distance = curDistance + weight;
      if (distance < distances[nextNode]) {
        distances[nextNode] = distance;
        queue.push([nextNode, distance]);
      }
    }
  }
  return distances;
}

// 0번에서 출발
console.log(dijk(graph, 0));
