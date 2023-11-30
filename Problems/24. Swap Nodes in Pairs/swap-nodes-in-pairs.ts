//Solution 1: 44ms 43.71 MB
function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let current = head;

  while (current && current.next) {
    const temp = current.next.val;
    current.next.val = current.val;
    current.val = temp;

    current = current.next?.next ?? null;
  }

  return head;
}
