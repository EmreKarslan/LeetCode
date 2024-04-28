//Solution 1: Time Limit Exceeded
function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
  const graph: number[][] = [];

  for (let i = 0; i < n; i++) {
    graph.push([]);
  }

  for (const [node1, node2] of edges) {
    graph[node1].push(node2);
    graph[node2].push(node1);
  }

  const dfs = (node: number, parent: number, stepCost: number) => {
    let travelCost = 0;
    for (const neighbor of graph[node]) {
      if (neighbor === parent) continue;
      travelCost += stepCost + dfs(neighbor, node, stepCost + 1);
    }
    return travelCost;
  };

  const answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(dfs(i, -1, 1));
  }

  return answer;
}

//Solution 2: 266ms 86.07 MB(Tree Rerooting DP)
function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
  const graph: number[][] = [];
  const subtreeNodeCount: number[] = [];
  const subtreeDistSum: number[] = [];

  for (let i = 0; i < n; i++) {
    graph.push([]);
    subtreeNodeCount[i] = 1; // Initialize each node's subtree node count to 1 (itself)
    subtreeDistSum[i] = 0; // Initialize each node's subtree distance sum to 0
  }

  // Build the adjacency list
  for (const [node1, node2] of edges) {
    graph[node1].push(node2);
    graph[node2].push(node1);
  }

  const dfs = (node: number, parent: number, isFirstPass: boolean) => {
    for (const neighbor of graph[node]) {
      if (neighbor !== parent) {
        if (isFirstPass) {
          dfs(neighbor, node, isFirstPass);
          subtreeNodeCount[node] += subtreeNodeCount[neighbor];
          subtreeDistSum[node] +=
            subtreeDistSum[neighbor] + subtreeNodeCount[neighbor];
        } else {
          subtreeDistSum[neighbor] =
            subtreeDistSum[node] -
            subtreeNodeCount[neighbor] +
            (n - subtreeNodeCount[neighbor]);
          dfs(neighbor, node, isFirstPass);
        }
      }
    }
  };

  dfs(0, -1, true);
  dfs(0, -1, false);

  return subtreeDistSum;
}
