//Solution 1: 82ms 46.12 MB
function findContentChildren(g: number[], s: number[]): number {
  let satisfiedChildrenCount = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  for (const cookieSize of s) {
    if (cookieSize >= g[satisfiedChildrenCount]) satisfiedChildrenCount++;
  }

  return satisfiedChildrenCount;
}
