class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array, this.length);
    return array;
  }
  printAtIndex(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      if (!currentNode.next) {
        console.log(currentNode.value, i);
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    console.log(currentNode.value, index);
    return currentNode;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    } else if (index >= this.length) {
      this.append(value);
    } else {
      let currentNode = this.head;
      let newNode = new Node(value);
      // Get to the index
      for (let i = 1; i < index; i++) {
        currentNode = currentNode.next;
      }
      // Create a pointer to the next value
      const next = currentNode.next;
      // Break the chain: insert the new node
      currentNode.next = newNode;
      // Glue the chain: point the inserted node to saved next node
      newNode.next = next;
      this.length++;
    }
  }
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.head;
    } else if (index >= this.length) {
      console.log("Nothing to remove");
      return null;
    } else {
      let currentNode = this.head;
      // Get to the index
      for (let i = 1; i < index; i++) {
        currentNode = currentNode.next;
      }
      const removedNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      this.length--;
      return removedNode;
    }
  }
}

let LinkList = new LinkedList("initial value");
LinkList.append("First added Item");
LinkList.append("Second added Item");
LinkList.append("Third added Item");
LinkList.prepend("Prepended Item");
LinkList.insert(3, "Insert");
LinkList.insert(1, "Insert One");
LinkList.insert(0, "Insert Zero");
LinkList.printList();
LinkList.insert(99, "Insert Far Above");
LinkList.printList();
LinkList.remove(3);
LinkList.printList();

for (let i = 0; i < LinkList.length; i++) {
  LinkList.printAtIndex(i);
}
