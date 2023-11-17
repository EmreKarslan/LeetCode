/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

//Solution: 86ms 48.1 MB
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const result = new ListNode();
  let current = result;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const sum = (l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val) + carry;

    if (l1 !== null) {
      l1 = l1.next;
    }

    if (l2 !== null) {
      l2 = l2.next;
    }

    current.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);

    current = current.next;
  }

  return result.next;
}

//Solution: 89ms 48.3 MB
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummyHead = new ListNode();
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;

    current.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);

    current = current.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
}
