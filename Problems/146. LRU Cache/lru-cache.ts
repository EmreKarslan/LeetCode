//Solution 1: 511ms 128.99 MB
class LRUCache {
  private capacity: number;
  private map: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
  }

  private removeFirstKey(): void {
    const firstKey = this.map.keys().next().value;
    this.map.delete(firstKey);
  }

  private updateKey(key: number, value: number): void {
    this.map.delete(key);
    this.map.set(key, value);
  }

  get(key: number): number {
    const value = this.map.get(key);

    if (value === undefined) return -1;

    this.updateKey(key, value);
    return value;
  }

  put(key: number, value: number): void {
    if (this.map.size === this.capacity && !this.map.has(key)) {
      this.removeFirstKey();
    }

    this.updateKey(key, value);
  }
}
