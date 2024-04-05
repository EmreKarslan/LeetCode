//Solution 1: 3ms 42.27 MB
public String makeGood(String s) {
    Stack<Character> stack = new Stack<Character>();

    for (int i = 0; i < s.length(); i++) {
        char previousChar = !stack.isEmpty() ? stack.peek() : '\0';
        char currentChar = s.charAt(i);
        if (Character.toUpperCase(currentChar) == previousChar
            && Character.toLowerCase(currentChar) == currentChar) {
            stack.pop();
            continue;
        }

        if (Character.toLowerCase(currentChar) == previousChar
            && Character.toUpperCase(currentChar) == currentChar) {
            stack.pop();
            continue;
        }

        stack.push(currentChar);
    }

    StringBuilder sb = new StringBuilder();
    while (!stack.isEmpty()) {
        sb.insert(0,
            stack.pop()); 
    }

    return sb.toString();
}

//Solution 2: 1ms 41.89 MB
public String makeGood(String s) {
    StringBuilder sb = new StringBuilder();

    for (int i = 0; i < s.length(); i++) {
        char currentChar = s.charAt(i);
        if (sb.length() > 0) {
            char previousChar = sb.charAt(sb.length() - 1);
            if (Character.toUpperCase(currentChar) == previousChar
                && Character.toLowerCase(currentChar) == currentChar) {
                sb.deleteCharAt(sb.length() - 1);
                continue;
            }

            if (Character.toLowerCase(currentChar) == previousChar
                && Character.toUpperCase(currentChar) == currentChar) {
                sb.deleteCharAt(sb.length() - 1);
                continue;
            }
        }

        sb.append(currentChar);
    }

    return sb.toString();
}