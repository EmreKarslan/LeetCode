//Solution 1: 51ms 42.2 MB
function strStr(haystack: string, needle: string): number {
  const haystackParts = haystack.split(needle);
  return haystackParts[0].length === haystack.length
    ? -1
    : haystackParts[0].length;
}

//Solution 2: 31ms 42.4 MB
function strStr(haystack: string, needle: string): number {
  const index = haystack.indexOf(needle);

  return index === -1 ? -1 : index;
}
