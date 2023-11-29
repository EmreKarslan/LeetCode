class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

//Solution 1: 63ms 44.9 MB
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummyHead = new ListNode();
  let currentNode = dummyHead;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      currentNode.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      currentNode.next = new ListNode(list2.val);
      list2 = list2.next;
    }

    currentNode = currentNode.next;
  }

  if (list1 === null) {
    currentNode.next = list2;
  } else {
    currentNode.next = list1;
  }

  return dummyHead.next;
}

//Solution 2: 56ms 44.7 MB
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  return list1.val < list2.val
    ? new ListNode(list1.val, mergeTwoLists(list1.next, list2))
    : new ListNode(list2.val, mergeTwoLists(list1, list2.next));
}
