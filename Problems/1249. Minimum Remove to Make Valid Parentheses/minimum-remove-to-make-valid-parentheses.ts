//Solution 1: 70ms 58.24 MB
function minRemoveToMakeValid(s: string): string {
  const stack = [];
  const indices = [];
  const chars = s.split("");

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === ")") {
      if (stack.length > 0 && stack[stack.length - 1] === "(") {
        stack.pop();
        indices.pop();
      } else {
        chars[i] = ""; // Replace invalid ')' with an empty string
      }
    } else if (chars[i] === "(") {
      stack.push("(");
      indices.push(i);
    }
  }

  // Replace remaining '(' with an empty string
  for (const index of indices) {
    chars[index] = "";
  }

  // Return the modified string without invalid characters
  return chars.join("");
}

//Solution 2: 64ms 58.98 MB
function minRemoveToMakeValid(s: string): string {
  const stack = [];
  const indices = [];
  const chars = s.split("");

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === ")") {
      if (stack.length > 0 && stack[stack.length - 1] === "(") {
        stack.pop();
        indices.pop();
      } else {
        chars[i] = ""; // Replace invalid ')' with an empty string
      }
    } else if (chars[i] === "(") {
      stack.push("(");
      indices.push(i);
    }
  }

  // Replace remaining '(' with an empty string
  for (const index of indices) {
    chars[index] = "";
  }

  // Return the modified string without invalid characters
  return chars.join("");
}
