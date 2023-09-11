class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add a new node to the end of the list
  append(data) {
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

    this.size++;
  }

  // Insert a new node at a specific position
  insert(data, position) {
    if (position < 0 || position > this.size) {
      return false; // Invalid position
    }

    const newNode = new Node(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      newNode.next = current;
      prev.next = newNode;
    }

    this.size++;
    return true;
  }

  // Remove a node at a specific position
  removeAt(position) {
    if (position < 0 || position >= this.size) {
      return null; // Invalid position
    }

    let current = this.head;
    if (position === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }

    this.size--;
    return current.data;
  }

  // Find the index of a specific value
  indexOf(data) {
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
  isEmpty() {
    return this.size === 0;
  }

  // Get the size of the list
  getSize() {
    return this.size;
  }

  // Convert the linked list to an array
  toArray() {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(current.data);
      current = current.next;
    }

    return result;
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.insert(0, 0);
linkedList.removeAt(2);
console.log(linkedList.toArray()); // [0, 1, 3, 2]
console.log(linkedList.getSize()); // 4
console.log(linkedList.indexOf(3)); // 2
console.log(linkedList.isEmpty()); // false
