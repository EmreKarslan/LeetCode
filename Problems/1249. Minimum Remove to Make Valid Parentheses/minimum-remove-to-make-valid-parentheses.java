//Solution 1: 24ms 45.40 MB
public String minRemoveToMakeValid(String s) {
  StringBuilder sb = new StringBuilder(s);
  Stack<Character> parenthesStack = new Stack<>();
  Stack<Integer> parenthesIndices = new Stack<>();

  for (int i = 0; i < sb.length(); i++) {
    char c = sb.charAt(i);
    if (c == ')') {
      if (parenthesStack.isEmpty()) {
        sb.deleteCharAt(i);
        i--;
      } else {
        parenthesStack.pop();
        parenthesIndices.pop();
      }
    } else if (c == '(') {
      parenthesStack.push(c);
      parenthesIndices.push(i);
    }
  }

  while (!parenthesIndices.isEmpty()) {
    int deleteIndex = parenthesIndices.pop();
    sb.deleteCharAt(deleteIndex);
  }

  return sb.toString();
}


//Solution 2: 17ms 44.96 MB
public String minRemoveToMakeValid(String s) {
  StringBuilder sb = new StringBuilder(s);
  Stack<Integer> stack = new Stack<>();

  for (int i = 0; i < sb.length(); i++) {
    char c = sb.charAt(i);
    if (c == '(') {
      stack.push(i);
    } else if (c == ')') {
      if (!stack.isEmpty()) {
        stack.pop();
      } else {
        sb.deleteCharAt(i);
        i--;
      }
    }
  }

  while (!stack.isEmpty()) {
    sb.deleteCharAt(stack.pop());
  }

  return sb.toString();
}
