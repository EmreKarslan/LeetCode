class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }
}

const closeParentheses = { ")": "(", "]": "[", "}": "{" };

//Solution 1: 58ms 48.7 MB
function isValid(s: string): boolean {
  if (s.length % 2 !== 0) {
    return false;
  }

  const stack = new Stack<string>();

  for (const char of s) {
    if (closeParentheses[char]) {
      if (stack.pop() !== closeParentheses[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.isEmpty();
}

//Solution 2: 56ms 44.7 MB
function isValid(s: string): boolean {
  if (s.length % 2 !== 0) {
    return false;
  }

  const stack: string[] = [];

  for (const char of s) {
    if (closeParentheses[char]) {
      if (stack.pop() !== closeParentheses[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

//Solution 3: 56ms 44.7 MB
function isValid(s: string): boolean {
  const stack = [];

  for (const char of s.split("")) {
    if (!hash[char]) {
      stack.unshift(char);
      continue;
    }

    if (stack[0] !== hash[char]) {
      return false;
    }
    stack.shift();
  }

  return stack.length === 0;
}
