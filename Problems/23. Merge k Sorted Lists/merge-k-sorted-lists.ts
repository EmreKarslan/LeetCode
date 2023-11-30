//Solution 1: 353ms 48.71 MB
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const dummyHead = new ListNode();
  let currentHead = dummyHead;

  while (true) {
    let currentMin = Number.POSITIVE_INFINITY;
    let currentMinList = -1; // Initialize to an invalid index

    for (let i = 0; i < lists.length; i++) {
      if (lists[i] && lists[i].val < currentMin) {
        currentMin = lists[i].val;
        currentMinList = i;
      }
    }

    if (currentMinList === -1) {
      break;
    } else {
      lists[currentMinList] = lists[currentMinList].next;
      currentHead.next = new ListNode(currentMin);
      currentHead = currentHead.next;
    }
  }

  return dummyHead.next;
}

//Solution 2: 83ms 50.7 MB
function convertToArray(listNode: ListNode | null): number[] {
  const array: number[] = [];

  while (listNode) {
    array.push(listNode.val);
    listNode = listNode.next;
  }

  return array;
}

function convertToListNode(numbers: number[]): ListNode | null {
  const dummyHead = new ListNode();
  let currentHead = dummyHead;

  for (const num of numbers) {
    currentHead.next = new ListNode(num);
    currentHead = currentHead.next;
  }

  return dummyHead.next;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let numbers = [];
  for (const list of lists) {
    numbers.push(...convertToArray(list));
  }

  numbers.sort((a, b) => a - b);
  return convertToListNode(numbers);
}

//Solution 3: 75ms 49.6 MB
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;

  let numbers = [];
  for (const list of lists) {
    numbers.push(...convertToArray(list));
  }

  numbers.sort((a, b) => a - b);
  return convertToListNode(numbers);
}
