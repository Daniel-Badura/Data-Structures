// class Node {
//     value: any;
//     next: Node | null;
  
//     constructor(value: any) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   class Queue {
//     first: Node | null;
//     last: Node | null;
//     length: number;
  
//     constructor() {
//       this.first = null;
//       this.last = null;
//       this.length = 0;
//     }
  
//     peek(): any | null {
//       if (this.isEmpty()) {
//         return null;
//       }
//       return this.first!.value;
//     }
  
//     enqueue(value: any): void {
//       const newNode = new Node(value);
//       if (this.isEmpty()) {
//         this.first = newNode;
//         this.last = newNode;
//       } else {
//         this.last!.next = newNode;
//         this.last = newNode;
//       }
//       this.length++;
//     }
  
//     dequeue(): any | null {
//       if (this.isEmpty()) {
//         return null;
//       }
//       if (this.length === 1) {
//         const dequeuedValue = this.first!.value;
//         this.first = null;
//         this.last = null;
//         this.length = 0;
//         return dequeuedValue;
//       } else {
//         const dequeuedValue = this.first!.value;
//         this.first = this.first!.next;
//         this.length--;
//         return dequeuedValue;
//       }
//     }
  
//     isEmpty(): boolean {
//       return this.length === 0;
//     }
//   }
  
//   // Example usage:
//   const myQueue = new Queue();
  
//   myQueue.enqueue("Dan");
//   myQueue.enqueue("Tom");
//   myQueue.enqueue("Brad");
//   myQueue.enqueue("Kim");
  
//   console.log("Peek:", myQueue.peek());
  
//   console.log("Dequeue:", myQueue.dequeue());
//   console.log("Dequeue:", myQueue.dequeue());
  
//   console.log("Is Empty:", myQueue.isEmpty());
  
//   console.log("Queue length:", myQueue.length);
  