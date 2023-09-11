class Node<T> {
    data: T;
    next: Node<T> | null;
  
    constructor(data: T) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList<T> {
    private head: Node<T> | null;
  
    constructor() {
      this.head = null;
    }
  
    // Add a new node to the end of the list
    append(data: T): void {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Insert a new node at a specific position
    insert(data: T, position: number): boolean {
      if (position < 0 || position > this.size()) {
        return false; // Invalid position
      }
  
      const newNode = new Node(data);
  
      if (position === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        let prev: Node<T> | null = null;
        let index = 0;
  
        while (index < position) {
          prev = current;
          current = current!.next;
          index++;
        }
  
        newNode.next = current;
        prev!.next = newNode;
      }
  
      return true;
    }
  
    // Remove a node at a specific position
    removeAt(position: number): T | null {
      if (position < 0 || position >= this.size() || !this.head) {
        return null; // Invalid position or empty list
      }
  
      let current = this.head;
      if (position === 0) {
        this.head = current.next;
      } else {
        let prev: Node<T> | null = null;
        let index = 0;
  
        while (index < position) {
          prev = current;
          current = current!.next;
          index++;
        }
  
        prev!.next = current!.next;
      }
  
      return current!.data;
    }
  
    // Find the index of a specific value
    indexOf(data: T): number {
      let current = this.head;
      let index = 0;
  
      while (current) {
        if (current.data === data) {
          return index;
        }
        current = current.next;
        index++;
      }
  
      return -1; // Value not found
    }
  
    // Check if the list is empty
    isEmpty(): boolean {
      return this.head === null;
    }
  
    // Get the size of the list
    size(): number {
      let current = this.head;
      let count = 0;
  
      while (current) {
        count++;
        current = current.next;
      }
  
      return count;
    }
  
    // Convert the linked list to an array
    toArray(): T[] {
      const result: T[] = [];
      let current = this.head;
  
      while (current) {
        result.push(current.data);
        current = current.next;
      }
  
      return result;
    }
  }
  
  // Example usage:
  const linkedList = new LinkedList<number>();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.insert(0, 0);
  linkedList.removeAt(2);
  console.log(linkedList.toArray()); // [0, 1, 3, 2]
  console.log(linkedList.size());      // 4
  console.log(linkedList.indexOf(3));  // 2
  console.log(linkedList.isEmpty());   // false
  