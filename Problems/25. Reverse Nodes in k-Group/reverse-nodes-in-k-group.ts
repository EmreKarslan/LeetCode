class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

//Solution 1: 61ms 47 MB
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || k === 1) {
    return head;
  }

  let currentNode = head;

  while (currentNode) {
    const values = [];
    let originalNode = currentNode;
    let isValid = true;

    for (let i = 0; i < k; i++) {
      if (currentNode) {
        values.push(currentNode.val);
        currentNode = currentNode.next;
      } else {
        isValid = false;
        break;
      }
    }

    if (!isValid) {
      break;
    }

    values.reverse();

    for (let i = 0; i < k; i++) {
      originalNode.val = values[i];
      originalNode = originalNode.next;
    }
  }

  return head;
}
