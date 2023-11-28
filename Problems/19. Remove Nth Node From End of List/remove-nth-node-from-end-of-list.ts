// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

//Solution 1: 58ms 45.2 MB
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let sizeOfList = 0;
  let dummyHead = new ListNode(0);
  dummyHead.next = head;

  let current: ListNode | null = head;

  while (current !== null) {
    sizeOfList++;
    current = current.next;
  }

  let nodeToRemove = sizeOfList - n;
  dummyHead.next = head;

  current = dummyHead;

  while (nodeToRemove > 0) {
    current = current.next!;
    nodeToRemove--;
  }

  current.next = current.next!.next;

  return dummyHead.next;
}

//Solution 2: 50ms 44.6 MB
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(0);
  dummy.next = head;

  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;

  for (let i = 0; i <= n; i++) {
    if (fast === null) {
      return head;
    }
    fast = fast.next;
  }

  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
}
